
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: '3d' });
}

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    //create a token
    const token = createToken(user._id);
    res.status(200).json({email, token})
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

//signup
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    //creten a token
    const token = createToken(user._id);
    res.status(200).json({ email, token }) // the token is the headers, payload and secret all encoded and bunched together
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

module.exports = {
  loginUser,
  signupUser
}