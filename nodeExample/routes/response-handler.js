const fs = require('fs');
// const path  = require('path');

exports.getExample = (req, res, next) => {
  fs.readFile('my-page.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('error reading file');
      return;
   }
    res.send(data);
  })
  // res.sendFile(path.join(__dirname, 'my-page.html'));
};

