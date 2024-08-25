const AnnouncementController = require('../controllers/announcement.controller');

module.exports = app => {
    app.get('/api/announcements', AnnouncementController.findAllAnnouncements);
    app.get('/api/announcement/:id', AnnouncementController.findOneAnnouncement);
    app.patch('/api/announcement/:id', AnnouncementController.updateAnnouncement);
    app.post('/api/announcement', AnnouncementController.createAnnouncement);
    app.delete('/api/announcement/:id', AnnouncementController.deleteAnnouncement);
    app.get('/api/announcement/academy/:academy', AnnouncementController.findAnnouncementsByAcademy);
};