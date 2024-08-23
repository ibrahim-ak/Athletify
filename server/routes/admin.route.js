const Admincontroller = require('../controllers/admin.controller');

module.exports = app => {
     app.get('/api/admin/:id', Admincontroller.findOneAdmin);
     app.post('/api/admin', Admincontroller.createAdmin);
     app.get('/api/admins', Admincontroller.findAllAdmin);
     app.delete('/api/admin/:id', Admincontroller.deleteAnExistingAdmin);

}
