const mongoose = require('mongoose');
const Academy = require("./academy.model");

const trainingTimeSchema = new mongoose.Schema({
     start: {
          type: String,
          default: "00:00"
     },
     end: {
          type: String,
          default: "00:00"
     },
     day: {
          type: String,
          default: "Day"
     }
});
const GroupSchema = new mongoose.Schema({

     Name: {
          type: String,
          required: [true, "Name is required"],
          minlength: [3, "Name must be at least 3 characters long"],
          maxlength: [200, "Name shouldn't have more than 200 chart"]
     }, Academy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Academy',
          required: true
     },
     trainingTimes: {
          type: [trainingTimeSchema],
          default: [{ start: "00:00", end: "00:00", day: "Day" }]
     },


}, { timestamps: true });
module.exports = mongoose.model('Group', GroupSchema);