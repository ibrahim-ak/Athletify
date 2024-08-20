const User = require('../models/user.model');




module.exports.findAllUser = (req, res) => {
     User.find({})
          .then((allUser) => {
               res.json({ Users: allUser })
          })
          .catch((err) => {
               res.json(err)
          });
}
module.exports.findOneuser = (req, res) => {
     User.findOne({ _id: req.params.id })
          .then(findOneuser => {
               res.json({ user: findOneuser })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createUser = (req, res) => {
     User.create(req.body)
          .then(newlyCreatedUser => {
               res.json({ user: newlyCreatedUser })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.updateExistinguser = (req, res) => {
     User.findOneAndUpdate(
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

module.exports.deleteAnExistinguser = (req, res) => {
     User.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
