const Announcementcontroller = require('../controllers/announcement.controller');

module.exports = app => {
     app.get('/api/announcements', Announcementcontroller.findAllAnnouncement);
     app.get('/api/announcement/:id', Announcementcontroller.findOneAnnouncement);
     app.patch('/api/announcement/:id', Announcementcontroller.updateExistingannouncement);
     app.post('/api/announcement', Announcementcontroller.createNewannouncement);
     app.delete('/api/announcement/:id', Announcementcontroller.deleteAnExistingannouncement);

}
