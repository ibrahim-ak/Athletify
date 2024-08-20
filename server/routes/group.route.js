const Groupcontroller = require('../controllers/group.controller');

module.exports = app => {
     app.get('/api/groups', Groupcontroller.findAllgroup);
     app.post('/api/group', Groupcontroller.createNewgroup);
     app.delete('/api/group/:id', Groupcontroller.deleteAnExistinggroup);

}
