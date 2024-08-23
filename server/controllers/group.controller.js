const Group = require('../models/group.model');




module.exports.findAllgroup = (req, res) => {
     Group.find()
          .then((allgroup) => {
               res.json({ groups: allgroup })
          })
          .catch((err) => {
               res.json(err)
          });
}
module.exports.findOnegroup = (req, res) => {
     Group.findOne({ _id: req.params.id })
          .then(findOnegroup => {
               res.json({ group: findOnegroup })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.updateExistinggroup = (req, res) => {
     Group.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatednew => {
               res.json({ new: updatednew })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}


module.exports.createNewgroup = (req, res) => {
     Group.create(req.body)
          .then(newlyCreatedgroup => {
               res.json({ group: newlyCreatedgroup })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.deleteAnExistinggroup = (req, res) => {
     Group.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
