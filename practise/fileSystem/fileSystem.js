const fs = require('fs');
const stateAbbreviations = require('./stateAbbreviations.json');

// console.log(stateAbbreviations);


fs.readFile('stateAbbreviations.json', 'utf8', (err, data) => {
  if (err) {
    console.log('err reading file')
    return;
  } try {
    const jsonData = JSON.parse(data);
     console.log('*******', jsonData);
    function givenKeyReturnValue(jsonArrOfObjs, str) {
      for (obj of jsonArrOfObjs) {
        if (obj.hasOwnProperty(str)) {
          return obj[str]
        }
      }
    }
    return console.log(givenKeyReturnValue(jsonData, 'Arizona'));
  } catch (error) {
    console.log('err passing JSON data' + error);
  }
} )