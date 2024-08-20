const mongoose = require('mongoose');
const Academy = require("./academy.model");  

const AnnouncementSchema = new mongoose.Schema({

     Content: {
          type: String,
          required: [true, "content is required"],
          minlength: [3, "Name must be at least 3 characters long"],
          maxlength: [1000, "Content shouldn't have more than 3000 chart"]
     }, Academy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Academy',
          required: true
     }


}, { timestamps: true });
module.exports = mongoose.model('Announcement', AnnouncementSchema);