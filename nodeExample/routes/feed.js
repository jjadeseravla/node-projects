const express = require('express');
const { body, validationResult } = require('express-validator');

const feedController = require('../controllers/feed')

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);
//POST /feed/post
router.post('/post', (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    feedController.createPost(req, res, next);
  });


// router.get('/', feedController.getExample);

module.exports = router;

