function longestwordlength(str) {
  let arr = [];
  str.split(' ').map((word) => {
    arr.push(word.length)
  });
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length -1];
}

function longestword(str) {
  let ans = '';
  const wordsArr = str.split(' ');

  wordsArr.map((word) => { // or:   for (let word of wordsArr) {
    if (word.length > ans.length) {
      ans = word; // watch your order here, so say ans should be the new word
    }
  });
  return ans;
}

console.log(longestword('this is a sentence with an clear answer')) // sentence
//console.log(longestwordlength('this is a sentence with an clear answer')); // 8

function removeDuplicatesFromArr(arr) {
  // const ans = new Set(arr);
  // return Array.from(ans); or simpler than these 2 lines:
  // return [...new Set(arr)];

  let uniqueElems = [];
  arr.forEach((elem) => { // not map() as you're not transforming each element of array into something else, use forEach()
    if (uniqueElems.indexOf(elem) === -1) {
      uniqueElems.push(elem);
    }
  })
  return uniqueElems;
}

console.log(removeDuplicatesFromArr([6, 3, 6, 3 ,4, 9, 10, 11])); // [6, 3 ,4, 9, 10, 11]

const fruits = ['apple', 'banana', 'orange', 'apple', 'mango'];

// console.log(fruits.indexOf('apple')); // Output: 0
// console.log(fruits.indexOf('orange')); // Output: 2
// console.log(fruits.indexOf('grapes')); // Output: -1 (not found)


function isAnagram(str1, str2) {
  const firstSortedWord = str1.split('').sort();
  const secondSortedWord = str2.split('').sort();

  console.log('first', firstSortedWord, 'second', secondSortedWord);

  return firstSortedWord.join('') === secondSortedWord.join('');
  // need to turn arrs to strings as comparing arrs only 
  // checks if they refer to the same array object, not if their elements are the same.


}

console.log(isAnagram('listen', 'silent'));

function noOfVowels(str) {
  const arrOfVowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  str.toLowerCase().split('').map((letter) => { // for (let char of str.toLowerCase())
    if (arrOfVowels.includes(letter)) {
      counter++
    }
  })
  return counter;
}

console.log(noOfVowels('hello world'));

function largestNumInArr(arr) {
  // const sortedArr = arr.sort((a, b) => a - b);
  // return sortedArr[sortedArr.length - 1];
  return Math.max(... arr);
}

console.log(largestNumInArr([4, 7, 9, 1, 16, 3, 166]));

function factorial(num) {
  const arr = Array.from(Array(num), (_, index) => index + 1);
  return arr.reduce((acc, curr) => {
    return acc * curr
  }, 1);
}

console.log(factorial(5)) // 1*2*3*4*5 = 120
console.log(factorial(6)) // 1*2*3*4*5*6 = 640

function removeAllWhiteSpaces(str) {
  return str.replace(/\s/g, '');
}

// \s matches whitespace characters, including spaces, tabs and line breaks.
console.log(removeAllWhiteSpaces(' Interview,   Happy ')); // 'Interview,Happy'

function noUseLengthLastWord(arr) {
  return  arr.splice(-1, 1);
}

console.log(noUseLengthLastWord(['white', 'red', 'black', 'yellow'])) // yellow

function seperateWords(arr) {
  return arr.join(' ').split(' ');
}

console.log(seperateWords(['i want to become', 'a professional', 'developer'])) // ['i', 'want', 'to', 'become', 'a' ...]

// function isEndingCorrect(str, target) {
//   const targetArr = target.split('').reverse();

//   const arr = str.split('').reverse();

//   // console.log('targertArr', targetArr, 'arr', arr);
//   return arr.some((letter) => {
//     if (letter === targetArr[0]) {
//       return true
//     } else if (targetArr.length === 0) {
//       targetArr.shift();
//       return false;
//     } else {
//       return false;
//     }
//   })
// }

function isEndingCorrect(str, target) {
  const targetArr = target.split('').reverse();
  const arr = str.split('').reverse();
  let found = false;

  // console.log('targertArr', targetArr, 'arr', arr);
  arr.forEach((letter) => {
    if (letter === targetArr[0]) {
      targetArr.shift();
      if (targetArr.length === 0) {
        found = true;
      }
    }
  });
  return found;
}

console.log('here', isEndingCorrect('Bastian', 'n')) // true
console.log(isEndingCorrect('Bastian', 'tian')) // true
console.log(isEndingCorrect('Bastian', 'joe')) // false
console.log(isEndingCorrect('horrid', 'rid')) // true
console.log(isEndingCorrect('horrid', 'jarid')) // false

function repeatStrNumTimes(str, num) {
  let ansStr = '';
  for (i = 1; i <= num; i++) {
    ansStr = ansStr.concat(str);
  }
  return ansStr;
}

console.log(repeatStrNumTimes('abc', 3)) // 'abcabcabc

function truncateStr(str, num) {
  const removeSpacingStr = str.replace(/\s/g, '')
  return removeSpacingStr.split('').slice(0, num).join('');
}

console.log(truncateStr('make this only be a certain length', 5));

function chunkArrInGroupSize(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) { // add size eg if its 2, you get [a, b], [c, d] not[a, b], [b, c], [c, d] etc
      result.push(arr.slice(i, i + size)); // i is going up by 1 but size is amoung you want to take away so if i =2 and size = 2, then 2nd array is [b, c]
  }
  return result;
}

console.log(chunkArrInGroupSize(['a', 'b', 'c', 'd'], 2)) // [['a', 'b], ['c', 'd']]
console.log(chunkArrInGroupSize([0, 1, 2, 3, 4, 5], 4)) // [[0, 1, 2, 3], [4,5]]

function deleteXReturnNewArr(arr, howMany) {
  // arr.slice(0, howMany); gives oppostie of what you would want, eg want [3], but getting [1, 2] for input of [1, 2, 3]
  return arr.slice(howMany);s
}

console.log("**", deleteXReturnNewArr([1, 2, 3], 2)) // [3]
console.log("**", deleteXReturnNewArr([1, 2, 3], 0)) // [1, 2, 3]


function isMutation(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  let placeHolder = [];
  str2.split('').map((letter) => {
    if (!str1.includes(letter)) {
      placeHolder.push(letter)
    }
  });
  return placeHolder.length === 0 
}

console.log(isMutation(['alien', 'line'])) // true cos all letters in line are in alien
// console.log(isMutation(['abcdefghijklmnopqrstuvwxyz', 'defghi'])) // true
// console.log(isMutation(['Mary', 'Army'])) // true


function removeFalsyValues(arr) {
  // return arr.filter(Boolean);

  //or
  let truthies = [];
  arr.map((elem) => { // or for (const elem of arr) because a truthy is always true so it WILL go inside if block
    if (elem) {
      truthies.push(elem)
    }
  })
  return truthies;
}

console.log(removeFalsyValues([7, 'ate', '', false, 9])) // [7, 'ate', 9]
console.log(removeFalsyValues([false, null, 0, NaN, undefined, ''])) // []
console.log(removeFalsyValues([1, null, NaN, undefined, 2])) // [1, 2]


// if optional args exist in the arr, they should be removed
function destroyer(arr) {
  console.log(arguments); // [Arguments] { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }
  console.log(Array.from(arguments)); // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ]
  console.log(Array.from(arguments).slice(1)) // remove first element of array -> [2, 3]

  const extraArgsArr = Array.from(arguments).slice(1);

  extraArgsArr.forEach((elem) => {
    if (arr.includes(elem)) {
      arr = arr.filter((item) => item !== elem) // how to remove a given element if present in given array
    }
  });
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [1, 1]

function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b); // ascending
  
  let indexCounter = 0;
  sortedArr.map((number) => {
    if (num <= number) {
      return indexCounter;
    } else {
      indexCounter++
    }
  });
  return indexCounter;
}

console.log(getIndexToIns([3, 10, 5], 3)) // 0
console.log(getIndexToIns([1, 2, 3, 4], 1.5)) // 1
console.log(getIndexToIns([20, 3, 5], 19)) //2 cos sorted arr gives [3, 5, 20] and 19 is beterrn 5 and 20 so index 2
console.log(getIndexToIns([2, 5, 10], 15)) // 3



//const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//const alphabetObj =  Object.entries(alphabetArr); // [
//   [ '0', 'a' ],  [ '1', 'b' ],
//   [ '2', 'c' ],  [ '3', 'd' ],
//   [ '4', 'e' ],  [ '5', 'f' ],
//   [ '6', 'g' ],  [ '7', 'h' ],
//   [ '8', 'i' ],  [ '9', 'j' ],
//   [ '10', 'k' ], [ '11', 'l' ],
//   [ '12', 'm' ], [ '13', 'n' ],
//   [ '14', 'o' ], [ '15', 'p' ],
//   [ '16', 'q' ], [ '17', 'r' ],
//   [ '18', 's' ], [ '19', 't' ],
//   [ '20', 'u' ], [ '21', 'v' ],
//   [ '22', 'w' ], [ '23', 'x' ],
//   [ '24', 'y' ], [ '25', 'z' ]
// ]


function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const rangeArr = []
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    rangeArr.push(i);
  }
  return rangeArr.reduce((acc, curr) => {
    return acc + curr
  }, 0);
}

console.log('whattttt', sumAll([4, 3])) // 3+4 = 7
console.log('hereeeeeee', sumAll([1, 4])) // 1+2+3+4 = 10
console.log('hereeeeee', sumAll([10, 5])) // 5+6+7+8+9+10 = 45

function diffArr(arr1, arr2) {
  const combo = [...arr1, ...arr2];
  let res =[]
     combo.filter((num) => {
    if (!arr1.includes(num) || !arr2.includes(num)) {
      res.push(num);
    }
  });
  return res;
}

//OR:
// function diffArr(arr1, arr2) {
//   let combo = [...arr1, ...arr2];
//   return combo.filter((num) => {
//     if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) { 
// // if num from combo of both array does NOT exist in arr1 OR arr2
//       return num;
//     }
//   })
// }

console.log(diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5])) // [4]
// if (arr2.indexOf(arr[i]) === -1) // check if arr[i] element from arr1 exists in arr2





function convertToRoman(num) {
  const romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  // LOOP THROUGH AN OBJ BY:
  for (const key in romanToNum) {
    console.log('key', key);
    console.log('value', romanToNum[key]);
  }
}




function myReplace(str, before, after) {
  const arrOfWords = str.toLowerCase().split(' ');
  arrOfWords.map((word, i) => {
    if (word === before) {
      arrOfWords.splice(i, 1, after);
    // or just word = after;
    }
  });
  return arrOfWords.join(' ');
}

// OR:
//str.replace(before, after);

console.log(myReplace('A quick red fox jumped over the lazy dog', 'jumped', 'leaped'));