const Newscontroller = require('../controllers/news.controller');

module.exports = app => {
     app.get('/api/news', Newscontroller.findAllnews);
     app.get('/api/new/:id', Newscontroller.findOnenew);
     app.patch('/api/new/:id', Newscontroller.updateExistingnew);
     app.post('/api/new', Newscontroller.createNews);
     app.delete('/api/new/:id', Newscontroller.deleteAnExistingnew);

}
