const News = require('../models/news.model');
const express = require('express');
const router = express.Router();




module.exports.findAllnews = (req, res) => {
     News.find()
          .then((allnews) => {
               res.json({ news: allnews })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.findOnenew = (req, res) => {
     News.findOne({ _id: req.params.id })
          .then(findOnenew => {
               res.json({ new: findOnenew })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.findNewsByAcademy = (req, res) => {
     News.find({ academy: req.params.academy })
          .then(news => {
               res.json({ news: news })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.createNews = (req, res) => {
     News.create(req.body)
          .then(newlyCreatednews => {
               res.json({ new: newlyCreatednews })
          })
          .catch((err) => {
               res.status(400).json(err)
          });
}

module.exports.updateExistingnew = (req, res) => {
     News.findOneAndUpdate(
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
     News.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}


