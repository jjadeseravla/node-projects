
const User = require('../models/userModel');

//login
const loginUser = async (req, res) => {
  res.json({msg: 'login user'})
}

//signup
const signupUser = async (req, res) => {
  res.json({msg: 'sign up user'})
}

module.exports = {
  loginUser,
  signupUser
}