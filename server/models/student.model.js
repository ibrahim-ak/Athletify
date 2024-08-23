const mongoose = require('mongoose');
const Group = require("./group.model");  
const bcrypt = require('bcrypt');

const StudentSchema = new mongoose.Schema({
     username: {
          type: String,
          required: [true, "User Name is required"],
          unique: [true, "User Name is already used"],
          trim: true,    // Optional: Remove whitespace from both ends
          minlength: [3, "Username must be at least 3 characters long"], // Optional: Set minimum length
          maxlength: [50, "Username must be less than 50 characters"] // Optional: Set maximum length
     },
     phone: {
          type: String,
          required: [true, "Phone number is required"],
          minlength: [8, "Phone number must be 8 characters or longer"]
     },
     password: {
          type: String,
          required: [true, "Password is required"],
          minlength: [8, "Password must be 8 characters or longer"]
     },
     gender: {
          type: String,
          required: [true, "Gender is required"]
     },
     age: {
          type: Number,
          required: [true, "Age is required"]
     },
     group: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Group',
          required: true
     },
     role: {
          type: String,
          default: 'student'
     }
}, { timestamps: true });

StudentSchema.virtual('confirmPassword')
     .get(function () { return this._confirmPassword; })
     .set(function (value) { this._confirmPassword = value; });

StudentSchema.pre('validate', function (next) {
     if (this.password !== this.confirmPassword) {
          this.invalidate('confirmPassword', 'Password must match confirm password');
     }
     next();
});

StudentSchema.pre('save', function (next) {
     if (!this.isModified('password')) return next();
     bcrypt.hash(this.password, 10)
          .then(hash => {
               this.password = hash;
               next();
          })
          .catch(err => next(err));
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
