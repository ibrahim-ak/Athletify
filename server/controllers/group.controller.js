const group = require('../models/group.model');




module.exports.findAllgroup = (req, res) => {
     group.find()
          .then((allgroup) => {
               res.json({ Groups: allgroup })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createNewgroup = (req, res) => {
     group.create(req.body)
          .then(newlyCreatedgroup => {
               res.json({ group: newlyCreatedgroup })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.deleteAnExistinggroup = (req, res) => {
     group.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
