const Groupcontroller = require('../controllers/group.controller');

module.exports = app => {
     app.get('/api/groups', Groupcontroller.findAllgroup);
     app.get('/api/group/:id', Groupcontroller.findOnegroup);
     app.post('/api/group', Groupcontroller.createNewgroup);
     app.patch('/api/group/:id', Groupcontroller.updateExistingGroup);
     app.delete('/api/group/:id', Groupcontroller.deleteAnExistinggroup);

}
