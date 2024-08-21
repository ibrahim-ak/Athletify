const Academy = require('../models/academy.model');




module.exports.findAllAcademies = (req, res) => {
     Academy.find({})
          .then((allAcademies) => {
               res.json({ Academies: allAcademies })
          })
          .catch((err) => {
               res.json(err)
          });
}
module.exports.findOneAcademy = (req, res) => {
     Academy.findOne({ _id: req.params.id })
          .then(findOneAcademy => {
               res.json({ academy: findOneAcademy })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createAcademy = (req, res) => {
     Academy.create(req.body)
          .then(newlyCreatedAcademy => {
               res.json({ academy: newlyCreatedAcademy })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.updateExistingAcademy = (req, res) => {
     Academy.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatedAcademy => {
               res.json({ academy: updatedAcademy })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.deleteAnExistingAcademy = (req, res) => {
     Academy.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
