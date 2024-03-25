const numbers = [3, 7, -2, 9, -4, 5];

const nums = [3, 8, 2, 10, 5]; 


function sumOfPositives(numbers) {
  const biggerThan0 = numbers.filter((num) => num > 0)
  return biggerThan0.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
}

// console.log(sumOfPositives(numbers)); // Output: 24

function maxDifference(nums) {
  const sortedNums = nums.sort((a, b) => {
    return a - b;
  });
  return sortedNums[sortedNums.length -1] - sortedNums[0];
}

// console.log(maxDifference(nums)) // 8

function palindrome(string) {
  const reversedStr = string.toLowerCase().replace(/\W/g, '').split('').reverse().join('');
  if (string === reversedStr) {
    return true
  } else if (string.toLowerCase().replace(/\W/g, '').split('').join('') === reversedStr) {
    return true
  } else {
    return false;
  }
}

// refactored:
// const cleanStr = string.toLowerCase().replace(/\W/g, '');
// const reversedStr = cleanStr.split('').reverse().join('');
// return cleanStr === reversedStr;

// console.log(palindrome('racecar')); //true
// console.log(palindrome('hello')); // false
// console.log(palindrome('A man, a plan, a canal, Panama')); // true

function howManyVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  str.toLowerCase().split('').map((letter) => {
    if (vowels.includes(letter)) {
      count++
    }
  })
  return count;
}

// console.log(howManyVowels('hello')) // 2

function formatDuration(num) {
  function formatPart(quantity, unit) {
      return `${quantity} ${unit}${quantity !== 1 ? 's' : ''}`;
  }

  if (num === 0) {
      return 'now';
  }

  if (num < 60) {
      return formatPart(num, 'second');
  }

  if (num < 3600) {
      const minutes = Math.floor(num / 60);
      const remainingSeconds = num % 60;
      const formattedMinutes = formatPart(minutes, 'minute');
      const formattedSeconds = remainingSeconds > 0 ? ` and ${formatPart(remainingSeconds, 'second')}` : '';
      return formattedMinutes + formattedSeconds;
  }

  if (num < 86400) {
      const hours = Math.floor(num / 3600);
      const remainingMinutes = Math.floor((num % 3600) / 60); // Calculate remaining minutes
      const formattedHours = formatPart(hours, 'hour');
      const formattedMinutes = remainingMinutes > 0 ? `, ${formatPart(remainingMinutes, 'minute')}` : '';
      const remainingSeconds = num % 60;
      const formattedSeconds = remainingSeconds > 0 ? ` and ${formatPart(remainingSeconds, 'second')}` : '';
      return formattedHours + formattedMinutes + formattedSeconds;
  }

  if (num < 31536000) {
      const days = Math.floor(num / 86400);
      const remainingHours = Math.floor((num % 86400) / 3600); // Calculate remaining hours
      const remainingMinutes = Math.floor(((num % 86400) % 3600) / 60); // Calculate remaining minutes
      const formattedDays = formatPart(days, 'day');
      const formattedHours = remainingHours > 0 ? `, ${formatPart(remainingHours, 'hour')}` : '';
      const formattedMinutes = remainingMinutes > 0 ? ` and ${formatPart(remainingMinutes, 'minute')}` : '';
      const remainingSeconds = num % 60;
      const formattedSeconds = remainingSeconds > 0 ? ` and ${formatPart(remainingSeconds, 'second')}` : '';
      return formattedDays + formattedHours + formattedMinutes + formattedSeconds;
  }

  const years = Math.floor(num / 31536000);
  const remainingDays = Math.floor((num % 31536000) / 86400); // Calculate remaining days
  const formattedYears = formatPart(years, 'year');
  const formattedDays = remainingDays > 0 ? `, ${formatPart(remainingDays, 'day')}` : '';
  return formattedYears + formattedDays;
}

// console.log(formatDuration(1)) // '1 second'
// console.log(formatDuration(62)) // '1 minute and 2 seconds'
// console.log(formatDuration(120)) // 2 minutes
// console.log(formatDuration(3600)) // 1 hour
// console.log(formatDuration(3662)) // 1 hour, 1 minute and 2 seconds

function longerNum(strArr, position1, position2) {
  if (strArr[strArr.length - position1] > strArr[strArr.length - position2]) {
    return -1
  }
}

function nextSmaller(num) {
  const strArr = num.toString().split('');
  if (strArr.length === 1) {
    return -1
  }
    // Compare each element with the first element
    const firstElement = strArr[0];
  const same = strArr.every(element => element === firstElement);
  if (same) {
    return -1;
  }
  if (strArr.length === 2) {
    const reverseStr = strArr.reverse().join('');
    return parseInt(reverseStr);
  } else {
    const long = strArr.length;
    longerNum(strArr, strArr[long - 1], strArr[long - 2]);
    // if (strArr[strArr.length - 1] > strArr[strArr.length - 2]) {
    //   if (strArr[strArr.length - 2] > strArr[strArr.legnth - 3]) {  
    //     return -1
    //   }
    // }
  }
}

// console.log(nextSmaller(21)) // == 12
// console.log(nextSmaller(9)) // == -1
// console.log(nextSmaller(111)) // == -1
// console.log(nextSmaller(531))//  == 513
// console.log(nextSmaller(2071)) // == 2017
// console.log(nextSmaller(135)) // == -1
// console.log(nextSmaller(1027)) // == 0721 is out as num cant lead with 0


//make a javascript function which takes: [ { pos: [ 3 ], peaks: [ 6 ] }, { pos: [ 7 ], peaks: [ 3 ] } ] 
// to gives out: { pos: [3, 7], peaks: [6, 3] }

function mergeArrUusingForEach(arr) {
  const res = { pos: [], peaks: [] };
  arr.forEach(obj => {
    res.pos.push(...obj.pos);
    res.peaks.push(...obj.peaks);
});

  return result;
}

function mergeArrsUsingMap(arr) {
  return arr.map((obj) => {
    return { pos: obj.pos, peaks: obj.peaks };
  }).reduce((acc, curr) => {
    acc.pos.push(...curr.pos);
    acc.peaks.push(...curr.peaks);
    return acc;
  }, { pos: [], peaks: [] });
 }

// in .reduce() initialValue (optional): A value to use as the first argument to the first call of the callback. 
//If not provided, the first element of the array will be used as the initial value of the accumulator.

//console.log(mergeArrsUsingMap([ { pos: [ 3 ], peaks: [ 6 ] }, { pos: [ 7 ], peaks: [ 3 ] } ] ));


function sum(num) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1]
  } else {
    return function(num2) {return num + num2}
  }
}

function sum1(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

// console.log(sum1(2, 3)) //5
// console.log(sum1(2)(3)) //5 

function work() {
  for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
  }
}

console.log(work());


const arrNums = [1, 2, 3];
const elem = 4
function addBeginning(a, b) {
  return [...a, b]
  // a.push(b)
}
function addEnd(a, b) {
  return [b, ...a];
  //a.unshift(b)
}

// console.log(addBeginning(arrNums, elem));
// console.log(addEnd(arrNums, elem));

function isInteger(elem) {
  return Number.isInteger(elem);
  // return (elem ^ 0) === elem;
  // return (typeof x === 'number') && (x % 1 === 0);
}

console.log(isInteger(5))
console.log(isInteger('cat'))