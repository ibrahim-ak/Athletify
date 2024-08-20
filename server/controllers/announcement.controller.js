const Announcement = require('../models/announcement.model');




module.exports.findAllAnnouncement = (req, res) => {
     Announcement.find()
          .then((allannouncement) => {
               res.json({ announcements: allannouncement })
          })
          .catch((err) => {
               res.json(err)
          });
}
module.exports.findOneAnnouncement = (req, res) => {
     Announcement.findOne({ _id: req.params.id })
          .then(findOneAnnouncement => {
               res.json({ announcement: findOneAnnouncement })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createNewannouncement = (req, res) => {
     Announcement.create(req.body)
          .then(newlyCreatedannouncement => {
               res.json({ announcement: newlyCreatedannouncement })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.updateExistingannouncement = (req, res) => {
     Announcement.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatedannouncement => {
               res.json({ announcement: updatedannouncement })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.deleteAnExistingannouncement = (req, res) => {
     Announcement.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
