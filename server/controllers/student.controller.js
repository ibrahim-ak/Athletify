const Student = require('../models/student.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



module.exports.findAllStudent = (req, res) => {
     Student.find()
          .then((allstudent) => {
               res.json({ students: allstudent })
          })
          .catch((err) => {
               res.json(err)
          });
}
module.exports.findOneStudent = (req, res) => {
     Student.findOne({ _id: req.params.id })
          .then(findOneStudent => {
               res.json({ student: findOneStudent })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createStudent = (req, res) => {
     Student.create(req.body)
          .then(newlyCreatedStudent => {
               res.json({ student: newlyCreatedStudent })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.updateExistingStudent = (req, res) => {
     Student.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatedstudent => {
               res.json({ student: updatedstudent })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.deleteAnExistingStudent = (req, res) => {
     Student.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}


module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await Student.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret_key', { expiresIn: '10h' });

        // Log the user's role
        console.log(`Login successful for user with role: ${user.role}`);

        // Send back the token and role in the response
        res.json({
            message: 'Login successful',
            token: token,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
