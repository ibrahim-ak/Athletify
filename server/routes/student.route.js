const Studentcontroller = require('../controllers/student.controller');
const logincontroller = require('../controllers/login.controller')
module.exports = app => {
     app.get('/api/students', Studentcontroller.findAllStudent);
     app.get('/api/student/:id', Studentcontroller.findOneStudent);
     app.patch('/api/student/:id', Studentcontroller.updateExistingStudent);
     app.post('/api/student', Studentcontroller.createStudent);
     app.delete('/api/student/:id', Studentcontroller.deleteAnExistingStudent);
     app.post('/api/login', logincontroller.login);

}
