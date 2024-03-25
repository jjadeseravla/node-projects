console.log(car = new Vehicle("Honda", "white", "2010", "UK"));
function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

// Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }


function foo() {
  return
  {
      message: "Hello World"
  };
}
console.log(foo()); // undefined .... remember 
// the curly braket needs to be samw line as return to print string