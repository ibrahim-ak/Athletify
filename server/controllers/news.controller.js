const news = require('../models/news.model');




module.exports.findAllnews = (req, res) => {
     news.find()
          .then((allnews) => {
               res.json({ news: allnews })
          })
          .catch((err) => {
               res.json(err)
          });
}
module.exports.findOnenew = (req, res) => {
     news.findOne({ _id: req.params.id })
          .then(findOnenew => {
               res.json({ new: findOnenew })
          })
          .catch((err) => {
               res.json(err)
          });
}



module.exports.createNews = (req, res) => {
     news.create(req.body)
          .then(newlyCreatednews => {
               res.json({ new: newlyCreatednews })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.updateExistingnew = (req, res) => {
     news.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatednew => {
               res.json({ new: updatednew })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.deleteAnExistingnew = (req, res) => {
     news.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
