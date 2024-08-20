const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({

     Name: {
          type: String,
          required: [true, "Name is required"],
          minlength: [3, "Name must be at least 3 characters long"],
          maxlength: [200, "Name shouldn't have more than 200 chart"]
     }

}, { timestamps: true });
module.exports = mongoose.model('Group', GroupSchema);