// sharedFns.js
const fs = require('fs').promises;

const readingFile = async () => {
  try {
    const data = await fs.readFile('strNumbers.json', 'utf-8');
    const res = JSON.parse(data);
    return res;
  } catch (e) {
    console.log('error reading file' + e);
  }
};

module.exports = { readingFile };

// what i changed from just readingFile, to use promise to only read
//it once and store in memory
// wrap in function
// use promise version of readfile
// await function
// filter result
