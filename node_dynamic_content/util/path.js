const path = require('path');

// const mainModule = require.main;
// module.exports = path.dirname(process.mainModule.filename);

module.exports = path.dirname(require.main.filename);