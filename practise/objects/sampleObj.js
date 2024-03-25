const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

//passenger names
console.log(passengers.map((n) => n.passengerName));

//veggie/vegan singers
console.log(passengers.map((n) => {
  if (n.isVegetarianOrVegan) {
    return n.passengerName;
  }
}))
//using filter
console.log(passengers.filter((n) => n = n.isVegetarianOrVegan).map((p) => p.passengerName))

//sort passengers by connecting flights, fewest first eg
// [
//   {
//     id: 3,
//     passengerName: 'Michael Jackson',
//     isVegetarianOrVegan: true,
//     connectedFlights: 1
//   },
//   {
//     id: 1,
//     passengerName: 'Freddie Mercury',
//     isVegetarianOrVegan: false,
//     connectedFlights: 2
//   },
//   {
//     id: 3,
//     passengerName: 'Kurt Cobain',
//     isVegetarianOrVegan: true,
//     connectedFlights: 3
//   },
//   {
//     id: 2,
//     passengerName: 'Amy Winehouse',
//     isVegetarianOrVegan: true,
//     connectedFlights: 4
//   }
// ]
console.log(passengers.sort((a, b) => {
  return a.connectedFlights - b.connectedFlights;
}));


let arr = ['hello', 'world', 'hello', 'java', 'java'];

console.log(arr.reduce((acc, curr) => {
  if (curr in acc) {
    acc[curr]++
  } else {
    acc[curr] = 1
  }
  return acc;
}, {})); // { hello: 2, world: 1, java: 2 }

function howMany(arr) {
  let obj = {};
  arr.forEach((str) => {
    if (obj[str]) {
      obj[str]++
    } else {
      obj[str] = 1;
    }
  })
  return obj;
}

console.log(howMany(arr));


let people = [
  { name: 'alice', age: 21 },
  { name: 'max', age: 20 },
  { name: 'jade', age: 20},
]


function groupAge(people) {
  let obj = {};
  people.forEach((item) => {
    if (!obj[item.age]) { // if no that age make one
      obj[item.age] = [item];
    } else { // if theres already that age, add the obj to the array
      obj[item.age].push[item]
    }
  })
  return obj
}

console.log(groupAge(people))
// output = {
//   '20': [
//     { name: "max", age: 20 },
//     { name: "jade", age:20},
//   ],
//   '21': [
//     { name: "alice", age:21}
//   ]
// }

const ar = [1, 3, 4, 6, 7, 8, 10];
function missingNums(ar) {
  const newAr = [...Array(ar[ar.length-1]).keys()]; // creates a array of numbers [0, 1, 2, 3, 4...]
  const numsNeededAr = newAr.map((n) => n + 1);
  let res = [];
   numsNeededAr.forEach((elem) => {
    // numsNeededAr.filter((num) => {ar.includes(num)}) 
    if (!ar.includes(elem)) {
      res.push(elem);
    }
  })
  return res;
}

console.log(missingNums(ar, 9));
// output = [2, 5, 9]

// remove duplicates
console.log(new Set([1, 2, 3, 4, 3, 6, 5, 4]));

let dups = [1, 1, 5, 6, 7, 7, 8, 9, 3, 4, 4];

function printDuplicates(arr) {
  let obj = {};
  arr.forEach((num) => {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  });
  let res = [];
  Object.keys(obj).forEach((elem) => {
    if (obj[elem] > 1) {
      // obj[elem];
      res.push(parseInt(elem));
    }
  })
  return res;
  // return obj; // with the two commented back in and res removed, you get: 
  // { '1': 2, '3': 1, '4': 2, '5': 1, '6': 1, '7': 2, '8': 1, '9': 1 }
}

console.log(printDuplicates(dups)) // [1, 4, 7]
// obj[num] = num gives the line below
// console.log(Object.keys({ '1': 1, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9 }))

// could also do easier way:
function printDuplicates2(dups) {
  let res = dups.filter((item, index) => {
    return dups.indexOf(item) !== index;
  });
  return res;
}
console.log(printDuplicates2(dups)); // [1, 7, 4]



let friends = [
  {
    name: 'anna',
    books: ['bible', 'harry potter'],
    age: 21
  },
  {
    name: 'bob',
    books: ['wan n peace', 'romeo and juliet'],
    age: 26
  },
  {
    name: 'anna',
    books: ['lord of the rings', 'shining'],
    age: 18
  },
]

function allBooks(obj) {
  const arrOfArrs = friends.map((person) => {
    return person.books
  });
  let res = [];
  arrOfArrs.forEach((arr) => {
    res.push(...arr);
  });
  return res;
}

//or use reduce
function allBooks2(obj) {
  return obj.reduce((acc, curr) => {
    return [ ...acc, ...curr.books]
  }, [])
}

// output = ['bible', 'harry potter', 'war n peace' ...]
console.log(allBooks(friends));
console.log(allBooks2(friends), '---------------');