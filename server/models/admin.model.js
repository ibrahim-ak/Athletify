const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminSchema = new mongoose.Schema({
  Username: {
      type: String,
      required: [true, " Name is required"]
    },
    
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [4, "Password must be 4 characters or longer"]
    },
  }, { timestamps: true });
  
  AdminSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);
  
    AdminSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });
  
  AdminSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });
  
  const Admin = mongoose.model('Admin', AdminSchema);
  module.exports = Admin;
  