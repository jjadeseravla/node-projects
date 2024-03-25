// Q23. Explain call(), apply() and, bind() methods.

// In JavaScript, the `call()`, `apply()`, and `bind()` methods are used to manipulate the execution context and binding of functions. They provide ways to explicitly set the value of `this` within a function and pass arguments to the function.

// `call()`: The `call()` method allows you to invoke a function with a specified `this` value and individual arguments passed in as separate parameters. It takes the context object as the first argument, followed by the function arguments.
// “`javascript

function greet(name) {

  console.log(`Hello, ${name}! My name is ${this.name}.`);

}

const person = {

  name: ‘John’

};

greet.call(person, ‘Alice’);

// Output: Hello, Alice! My name is John.

//“`

// In this example, `call()` is used to invoke the `greet()` function with the `person` object as the execution context and the argument `’Alice’`.

// `apply()`: The `apply()` method is similar to `call()`, but it accepts arguments as an array or an array-like object. It also allows you to set the `this` value explicitly.
// “`javascript

function greet(name, age) {

  console.log(`Hello, ${name}! I am ${age} years old.`);

  console.log(`My name is ${this.name}.`);

}

const person = {

  name: ‘John’

};

 

greet.apply(person, [‘Alice’, 25]);

// Output: Hello, Alice! I am 25 years old.

//         My name is John.

//“`

// In this example, `apply()` is used to invoke the `greet()` function with the `person` object as the execution context and an array `[‘Alice’, 25]` as the arguments.

// `bind()`: The `bind()` method creates a new function that has a specified `this` value and, optionally, pre-defined arguments. It allows you to create a function with a fixed execution context that can be called later.
// “`javascript

function greet() {

  console.log(`Hello, ${this.name}!`);

}

const person = {

  name: ‘John’

};

const greetPerson = greet.bind(person);

greetPerson();

// Output: Hello, John!

// “`

// In this example, `bind()` is used to create a new function `greetPerson` with the `person` object as the fixed execution context. When `greetPerson()` is called, it prints `”Hello, John!”`.

// The key difference between `call()`, `apply()`, and `bind()` lies in how they handle function invocation and argument passing. While `call()` and `apply()` immediately invoke the function, `bind()` creates a new function with the desired execution context but doesn’t invoke it right away.

// These methods provide flexibility in manipulating function execution and context, enabling the creation of reusable functions and control over `this` binding in JavaScript.