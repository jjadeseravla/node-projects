const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

//static signup method
userSchema.statics.signup = async function(email, password) {

  //validation
  if (!email ?? !password) {
  throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('password not strong enough');
  }

  const exists = await this.findOne({ email }) // this being the userModel itself, we dont have as a yet 
  // and we want to find that specific user by their email
  if (exists) {
    throw Error('Email already in use')
  }
  const saltedPassword = await bcrypt.genSalt(10); // 10 is default to number of salts
  const hash = await bcrypt.hash(password, saltedPassword);

  const user = await this.create({ email, password: hash }); // reactes a record in db
  return user;
}

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email ?? !password) {
    throw Error('All fields must be filled')
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error('Incorrect email')
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect password');
  }
  return user;
}

module.exports = mongoose.model('User', userSchema);