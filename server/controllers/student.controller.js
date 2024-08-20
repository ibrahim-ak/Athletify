const Student = require('../models/student.model');




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
