// a closure gives you access to an outer function's scope 
//from an inner function

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

const globalVar2 = "xyz";

const outerFunc2 = (outerArg2) => {
    const outerVar2 = 'a';
    
    const innerFunc2 = (innerArg2) => {
        const innerVar2 = 'b';
    
        console.log(
            "outerArg2 = " + outerArg2 + "\n" +
            "innerArg2 = " + innerArg2 + "\n" +
            "outerVar2 = " + outerVar2 + "\n" +
            "innerVar2 = " + innerVar2 + "\n" +
            "globalVar2 = " + globalVar2);
    };

    innerFunc2(456);
};

outerFunc2(123);

function outerFunction(outerValue) {
  // Inner function defined inside outerFunction
  function innerFunction(innerValue) {
      // Accessing outerValue from outerFunction's scope
      console.log("Outer value:", outerValue);
      // Accessing innerValue from innerFunction's scope
      console.log("Inner value:", innerValue);
  }

  // Returning inner function from outerFunction
  return innerFunction;
}

// Create a closure by invoking outerFunction and storing the returned innerFunction
const closure = outerFunction("Hello");

// Invoke the closure, passing a value to innerFunction
closure("World");




console.log('arrow function', ((x) => {
  return ((y) => {
    console.log(x);
  })(2);
})(1));
//1
// arrow function undefined

console.log('function', (function (x) {
  return (function (y) {
    console.log(x);
  })(2)
})(1));
// 1
// function undefined


var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
      return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());//  undefined
console.log(hero.getSecretIdentity());  // 'John Doe'

// The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

// One way to fix the stoleSecretIdentity() function is as follows:

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);



var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

// Output to the console will be “3”.

// There are three closures in the example, each with it’s own var b declaration. When a variable is invoked closures will be checked in order from local to global until an instance is found. Since the inner closure has a b variable of its own, that is what will be output.

// Furthermore, due to hoisting the code in inner will be interpreted as follows:

// function inner () {
//     var b; // b is undefined
//     b++; // b is NaN
//     b = 3; // b is 3
//     console.log(b); // output "3"
// }