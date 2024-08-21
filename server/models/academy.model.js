const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AcademySchema = new mongoose.Schema({
     username: {
          type: String,
          required: [true, "User Name is required"]
     },

     email: {
          type: String,
          required: [true, "Email is required"],
          unique: true,
          validate: {
               validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
               message: "Please enter a valid email"
          }
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
     },
     address: {
          type: String,
          required: [true, "address is required"],
     }
}, { timestamps: true });

AcademySchema.virtual('confirmPassword')
     .get(() => this._confirmPassword)
     .set(value => this._confirmPassword = value);

AcademySchema.pre('validate', function (next) {
     if (this.password !== this.confirmPassword) {
          this.invalidate('confirmPassword', 'Password must match confirm password');
     }
     next();
});

AcademySchema.pre('save', function (next) {
     bcrypt.hash(this.password, 10)
          .then(hash => {
               this.password = hash;
               next();
          });
});



const Academy = mongoose.model('Academy', AcademySchema);
module.exports = Academy;
