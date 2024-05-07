const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
  //verify user is authentication
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ e: 'Authorisation token required' });
  }

  // token made up of 3 things and we want to split by space and get the token which is second element:
  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET); // this line returns payload from that token,which has id
    // so req now has a user on it with an id property we can use in other controller fns
    req.user = await User.findOne({ _id }).select('_id');
    // instead of .findOne(_id) returning the whole user with password, email etc, it just returns their id
    next();
  } catch (e) { 
    console.log(e);
    res.status(401).json({ e: 'request is not authorised' });
  }
}

module.exports = requireAuth;