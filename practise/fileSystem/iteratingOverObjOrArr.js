const stateAbbreviations = [
  { 'Alabama': 'AL' },
  { 'Alaska': 'AK' },
  { 'Arizona': 'AZ' },
  { 'Arkansas': 'AR' },
  { 'California': 'CA' },
  { 'Colorado': 'CO' },
  { 'Connecticut': 'CT' },
  { 'Delaware': 'DE' },
  { 'Florida': 'FL' },
  { 'Georgia': 'GA' },
  { 'Hawaii': 'HI' },
  { 'Idaho': 'ID' },
  { 'Illinois': 'IL' },
  { 'Indiana': 'IN' },
  { 'Iowa': 'IA' },
  { 'Kansas': 'KS' },
  { 'Kentucky': 'KY' },
  { 'Louisiana': 'LA' },
  { 'Maine': 'ME' },
  { 'Maryland': 'MD' },
  { 'Massachusetts': 'MA' },
  { 'Michigan': 'MI' },
  { 'Minnesota': 'MN' },
]

function abbreviations(obj, stateAbbreviations) {
  const str =  Object.keys(obj)[0];
  const newObj = stateAbbreviations.filter(state => state.hasOwnProperty(str));
  return Object.values(newObj[0])[0]; // the outside [0] so ['AL'] turns to 'AL'
}

 console.log(abbreviations(stateAbbreviations[0], stateAbbreviations));


// const arr = [{ 'a': 'z' }, { 'b': 'y' }, {'c': 'x' }];
// function a(arr) {
//   return Object.fromEntries(arr.map(word => arr[word]));
// }
// console.log(a(arr))



// give a key and arr of objects, return the value of that key
const getStateAbbreviation = (stateAbbreviations, key) => { 
  for (const state of stateAbbreviations) { // use IN for OBJECTS, use ***
    if (state.hasOwnProperty(key)) {
      return state[key];
    }
  }
  return null; // Return null if the key is not found
};
const key = 'Minnesota';
const abbreviation = getStateAbbreviation(stateAbbreviations, key);
console.log('-------', abbreviation); // Output: 'MN'
// .hasOwnProperty() method is used to determine whether an object has a property with a 
// specified key as its own property.It returns a boolean
const obj1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj1.hasOwnProperty('a')); // Output: true
console.log(obj1.hasOwnProperty('d'));  // false




//  *** of here cos iterating over full objects not keys or values of objects 
// eg 
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log('let key in obj, the object keys', key); // Output: 'a', 'b', 'c'
  console.log('use IN for obj, the object values', obj[key])
}

const arr = [1, 2, 3];
for (let value of arr) {
  console.log('let value OF arr', value); // Output: 1, 2, 3
}
// for...in is used for iterating over the properties of an object, while for...of 
// is used for iterating over the values of an iterable object.


const arrOfArrs = [
  ['Alabama', 'AL'],
  ['Alaska', 'AK'],
  ['Arizona', 'AZ'],
  ['Arkansas', 'AR'],
  ['California', 'CA'],
  ['Colorado', 'CO'],
  ['Connecticut', 'CT'],
  ['Delaware', 'DE'],
  ['Florida', 'FL'],
  ['Georgia', 'GA'],
  ['Hawaii', 'HI'],
  ['Idaho', 'ID'],
  ['Illinois', 'IL'],
  ['Indiana', 'IN'],
  ['Iowa', 'IA'],
  ['Kansas', 'KS'],
  ['Kentucky', 'KY'],
  ['Louisiana', 'LA'],
  ['Maine', 'ME'],
  ['Maryland', 'MD'],
  ['Massachusetts', 'MA'],
  ['Michigan', 'MI'],
  ['Minnesota', 'MN']
];

const getArrOfArrs = (arrOfArrs, first) => {
    // Loop through the array of arrays
    for (let abbreviationArray of arrOfArrs) {
        // Check if the first element of the inner array matches the state name
        if (abbreviationArray[0] === stateName) {
            // If it matches, return the abbreviation (the second element of the inner array)
            return abbreviationArray[1];
        }
    }
    // If no matching state name is found, return null or any other desired value
    return null;
};

