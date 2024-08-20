const mongoose = require('mongoose');
const AnnouncementSchema = new mongoose.Schema({

     Content: {
          type: String,
          required: [true, "content is required"],
          minlength: [3, "Name must be at least 3 characters long"],
          maxlength: [1000, "Content shouldn't have more than 3000 chart"]
     }

}, { timestamps: true });
module.exports = mongoose.model('Announcement', AnnouncementSchema);