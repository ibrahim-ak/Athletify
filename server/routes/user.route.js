const Usercontroller = require('../controllers/user.controller');

module.exports = app => {
     app.get('/api/users', Usercontroller.findAllUser);
     app.get('/api/user/:id', Usercontroller.findOnenew);
     app.patch('/api/user/:id', Usercontroller.updateExistingnew);
     app.post('/api/user', Usercontroller.createUser);
     app.delete('/api/user/:id', Usercontroller.deleteAnExistingnew);

}
