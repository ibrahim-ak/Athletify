const Admin = require('../models/admin.model');

module.exports.findOneAdmin = (req, res) => {
     Admin.findOne({ _id: req.params.id })
          .then(findOneadmin => {
               res.json({ admin: findOneadmin })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createAdmin = (req, res) => {
     Admin.create(req.body)
          .then(newlyCreatedadmin => {
               res.json({ admin: newlyCreatedadmin })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}


module.exports.deleteAnExistingAdmin = (req, res) => {
     Admin.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}

register: (req, res) => {
     Admin.create(req.body)
       .then(admin => {
           res.json({ msg: "success!", admin: admin });
       })
       .catch(err => res.json(err));
   }