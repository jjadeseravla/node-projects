const { readingFile } = require('./sharedFunctions');

// NOT USED IN THE END, changed some code to sharedFns.js




// const fs = require('fs').promises;
// const strNumbers = require('./strNumbers.json');
// const strToNums = require('./strToNums'); 

// const readingFile = async () => {
//   try {
//     const data = await fs.readFile('strNumbers.json', 'utf-8');
//     const res = JSON.parse(data);
//     // console.log('-------', res); prints all of JSON
//     // return strToNums(res); 
//     return res;
//     } catch (e) {
//     console.log('error reading file' + e);
//     }
// };

// readingFile().then(result => {
//   return result+'here'
// }).catch(e => {
//   console.log('error at end' + e)
// })


// // what i changed from just readingFile, to use promise to only read
// //it once and store in memory
// // wrap in function
// // use promise version of readfile
// // await function
// // filter result