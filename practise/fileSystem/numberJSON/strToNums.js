

// async function strToNums(str) {
  //   try {
    //     const massiveJson = await readingFile();
    //     // console.log('Resolved value:', result); // Log the resolved value
    //     // return result;
    
    //     const newObj = massiveJson.filter(strObj => strObj.hasOwnProperty(str));
    //     return newObj;
    //   } catch (error) {
      //     console.log('Error:', error);
      //   }
      // }
      
const { readingFile } = require('./sharedFns');

async function strToNums(str) {
  try {
    const massiveJson = await readingFile();
    const individualObj = massiveJson.find(obj => Object.values(obj).includes(str));
    console.log('individualObj', individualObj);
    return parseInt(Object.keys(individualObj)[0]);
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

// Define and invoke an immediately invoked async function expression (IIFE)
async function myfunc(str) { 
  try {
    const result = await strToNums(str);
    console.log(result); // Output: {"1": "one"}
  } catch (error) {
    console.log('Error:', error);
  }
}

(async () => {
  // const result = await myfunc('one');
  // const result2 = await myfunc('twenty');
  const result3 = await myfunc('one hundred forty-six');
  console.log('---random async fn');
})();


  // console.log(strToNums('one')) //1
// console.log(strToNums('twenty')) //20
// console.log(strToNums('one hundred forty-six'))// 146