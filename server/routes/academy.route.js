const Academycontroller = require('../controllers/academy.controller');

module.exports = app => {
     app.get('/api/academies', Academycontroller.findAllAcademies);
     app.get('/api/academy/:id', Academycontroller.findOneAcademy);
     app.patch('/api/academy/:id', Academycontroller.updateExistingAcademy);
     app.post('/api/academy', Academycontroller.createAcademy);
     app.delete('/api/academy/:id', Academycontroller.deleteAnExistingAcademy);

}
