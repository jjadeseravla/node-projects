
const User = require('../models/userModel');

//login
const loginUser = async (req, res) => {
  res.json({msg: 'login user'})
}

//signup
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(200).json({email, user})
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

module.exports = {
  loginUser,
  signupUser
}