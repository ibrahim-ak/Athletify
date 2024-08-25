const Announcement = require('../models/announcement.model');

module.exports.findAllAnnouncements = (req, res) => {
    Announcement.find()
        .then(announcements => res.json({ announcements }))
        .catch(err => res.status(500).json(err));
};

module.exports.findOneAnnouncement = (req, res) => {
    Announcement.findOne({ _id: req.params.id })
        .then(announcement => {
            if (!announcement) {
                return res.status(404).json({ message: 'Announcement not found' });
            }
            res.json({ announcement });
        })
        .catch(err => res.status(500).json(err));
};

module.exports.findAnnouncementsByAcademy = (req, res) => {
    Announcement.find({ Academy: req.params.academy })
        .then(announcements => res.json({ announcements }))
        .catch(err => res.status(500).json(err));
};

module.exports.createAnnouncement = (req, res) => {
    Announcement.create(req.body)
        .then(newAnnouncement => res.status(201).json({ announcement: newAnnouncement }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateAnnouncement = (req, res) => {
    Announcement.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAnnouncement => {
            if (!updatedAnnouncement) {
                return res.status(404).json({ message: 'Announcement not found' });
            }
            res.json({ announcement: updatedAnnouncement });
        })
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAnnouncement = (req, res) => {
    Announcement.deleteOne({ _id: req.params.id })
        .then(result => {
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: 'Announcement not found' });
            }
            res.json({ result });
        })
        .catch(err => res.status(500).json(err));
};