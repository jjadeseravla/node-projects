// const { getExample } = require('../routes/response-handler');
const { validationResult } = require('express-validator/check');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
      title: 'first post',
      content: 'this is the content',
      imageUrl: 'images/duck.jpg',
      creator: {
        name: 'Max'
        },
      createdAt: new Date()
      }
    ]

  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({
        message: 'Validation failed, entered data is incorrect',
        errors: errors.array()
      });
  }
  // we expect to get a title and content
  const title = req.body.title;
  const content = req.body.content;
  //create post in db
  // 201 says it was successful (sends a message too) where as 200 just is for success
  res.status(201).json({
    message: 'post created successfully',
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: 'Max'},
      createdAt: new Date(),
    }
  })
}

// exports.getExample = getExample;