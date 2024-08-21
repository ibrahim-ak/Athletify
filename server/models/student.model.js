const mongoose = require('mongoose');
const Group = require("./group.model");  

const bcrypt = require('bcrypt');
const StudentSchema = new mongoose.Schema({
     Username: {
          type: String,
          required: [true, "User Name is required"]
     }
     ,
     phone: {
          type: String,
          required: [true, "phone is required"],
          minlength: [8, "Password must be 8 characters or longer"]
     },
     password: {
          type: String,
          required: [true, "Password is required"],
          minlength: [8, "Password must be 8 characters or longer"]
     }, gender: {
          type: String,
          required: [true, "gender is required"],
     }, age: {
          type: Number,
          required: [true, "age is required"],
     },
     group: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Group',
          required: true
     }


}, { timestamps: true });

StudentSchema.virtual('confirmPassword')
     .get(() => this._confirmPassword)
     .set(value => this._confirmPassword = value);

StudentSchema.pre('validate', function (next) {
     if (this.password !== this.confirmPassword) {
          this.invalidate('confirmPassword', 'Password must match confirm password');
     }
     next();
});

StudentSchema.pre('save', function (next) {
     bcrypt.hash(this.password, 10)
          .then(hash => {
               this.password = hash;
               next();
          });
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
