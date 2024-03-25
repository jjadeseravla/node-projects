

function what(arr) {
  let obj = {};
  arr.forEach((word) => {
     obj[word] = null;
  });
  return obj
}

function what2(arr) {
  return Object.fromEntries(arr.map(word => [word, null]));
}


// console.log(what2(['zebra', 'horse'])) //  d = {'zebra': null, 'horse': null}


var a = {},
    b={key:'b'},
    c={key:'c'};

a[b] = 123;  // 123
console.log(a[b] = 123)
a[c] = 456; // 456
console.log(a[c] = 456);

console.log(a[b]); // 456



let obj = {
  a: 1, b: 2, c: {
    age: 30
  }
};
let objClone = Object.assign({}, obj);

console.log('objClone: ', objClone);
//Note the potential pitfall, though: Object.assign() will just do a shallow copy, 
//not a deep copy. They still refer to the same nested objects as the original
obj.c.age = 45;
console.log('After Change - obj: ', obj);           // 45 - This also changes
console.log('After Change - objClone: ', objClone);


// to update a VALUE:
const obj = {"a": 1, "b": 2, "c": 4};

// Iterate over the keys of the object
Object.keys(obj).forEach(key => {
    // Check if the value is 4
    if (obj[key] === 4) {
        // Update the value to 3
        obj[key] = 3;
    }
});

console.log(obj); // Output: { "a": 1, "b": 2, "c": 3 }


// to update a KEY
const obj = {"a": 1, "b": 2, "d": 3};

// Check if the key "d" exists in the object
if ("d" in obj) {
    // Update the value associated with the key "d"
    obj["d"] = 4; // Change 3 to 4
}

console.log(obj); // Output: { "a": 1, "b": 2, "d": 4 }




