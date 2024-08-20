const Newscontroller = require('../controllers/news.controller');

module.exports = app => {
     app.get('/api/news', Newscontroller.findAllnews);
     app.get('/api/news/:id', Newscontroller.findOnenew);
     app.patch('/api/news/:id', Newscontroller.updateExistingnew);
     app.post('/api/news', Newscontroller.createNews);
     app.delete('/api/news/:id', Newscontroller.deleteAnExistingnew);

}
