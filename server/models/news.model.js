const mongoose = require('mongoose');
const Academy = require("./academy.model");  
const NewsSchema = new mongoose.Schema({
     Title: {
          type: String,
          required: [true, "title is required"],
          minlength: [3, "Name must be at least 3 characters long"]
     },
     Content: {
          type: String,
          required: [true, "content is required"],
          minlength: [3, "Name must be at least 3 characters long"],
          maxlength: [3000, "Content shouldn't have more than 3000 chart"]
     },
     Image: {
          type: String,
          required: [true, "image is required"],
     },
     Academy: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'Academy',  
          required: true  
     }

}, { timestamps: true });
module.exports = mongoose.model('News', NewsSchema);
