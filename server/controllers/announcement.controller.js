const announcement = require('../models/announcement.model');




module.exports.findAllannouncement = (req, res) => {
     announcement.find()
          .then((allannouncement) => {
               res.json({ Announcements: allannouncement })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createNewannouncement = (req, res) => {
     announcement.create(req.body)
          .then(newlyCreatedannouncement => {
               res.json({ Announcement: newlyCreatedannouncement })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.updateExistingannouncement = (req, res) => {
     announcement.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatedannouncement => {
               res.json({ Announcement: updatedannouncement })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.deleteAnExistingannouncement = (req, res) => {
     announcement.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
