const Announcementcontroller = require('../controllers/announcement.controller');

module.exports = app => {
     app.get('/api/announcements', Announcementcontroller.findAllannouncement);
     app.patch('/api/announcement/:id', Announcementcontroller.updateExistingannouncement);
     app.post('/api/announcement', Announcementcontroller.createNewannouncement);
     app.delete('/api/announcement/:id', Announcementcontroller.deleteAnExistingannouncement);

}
