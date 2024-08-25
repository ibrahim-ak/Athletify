const Student = require('../models/student.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



module.exports.findAllStudent = (req, res) => {
     Student.find()
     .populate('group', 'Name')  // Populate the group field
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
         .then(student => Student.findById(student._id).populate('group')) // Populate the group field
         .then(populatedStudent => res.json(populatedStudent)) // Send the populated student back
         .catch(err => res.status(400).json(err));
 };

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

module.exports.findStudentsbyGroup = (req, res) => {
     Student.find({ group: req.params.group })
     .populate('group', 'Name') // Ensure population here as well
         .then(student => res.json({ student }))
         .catch(err => res.status(500).json(err));
 };
