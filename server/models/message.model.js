const mongoose = require("mongoose");
const Group = require("./group.model");
const Student = require("./student.model");

const MessageItemSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const MessageSchema = new mongoose.Schema({
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true
  },
  messages: [MessageItemSchema]
}, { timestamps: true });

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;