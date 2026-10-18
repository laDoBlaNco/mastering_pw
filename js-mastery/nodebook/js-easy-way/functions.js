function functions() {
  /**
   * Function Declaration:
   * Function declarations use the function keyword and can be called by a name
   * Function declarations are hoisted in the compilation phase, making them available throughout their scope
   */
  function sayHello(name) {
    return `Hello, ${name}`;
  }
  console.log(sayHello("Ladoblanco"));

  /**
   * Function Expressions:
   * These assign a function to a variable. Unlike function declarations, function expressions
   * are not hoisted
   */
  const sayGoodbye = function (name) {
    return `Goodbye, ${name}`;
  };
  console.log(sayGoodbye("Bob"));

  // Array Functions: introduced in ES6, provide a more concise syntax for function expressions
  // (not declarations).
  // NOTE: Since they are expressions they are not hoisted and 'this' behaves differently in arrow functions
  const add = (a, b) => a + b; // return is implicit with one liners
  console.log(add(3, 4));

  // Callback Functions - can be passed as arguments to other functions. This enables a higher-order
  // programming paradigm
  function process(cb, value) {
    return cb(value);
  }
  console.log(process(add.bind(null, 5), 3));
  /**
   * NOTED: I've never seen the above yet. Why would I bind 'null' to a function expression???🤔
   * According to Google its used for partial function application or currying rather than setting
   * the value of this. Not sure why this was done above here though as it doesn't seem to be needed.
   *
   */

  // IIFE (Immediately Invoked Function Expressions)
  (function () {
    console.log("IIFE executed");
  })();

  // Default Parameters:
  function greet(name = "Guest") {
    console.log(`Hi ${name}`);
  }
  greet();
  greet("Odalis");

  // Rest Parameters - (introduced in ES6) allow functions to accept an arbitrary number of arguments
  // and collect them into an array
  function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3, 4, 5));

  // Function Hoisting
  console.log(earlyInvoke());
  function earlyInvoke() {
    return "hoisted";
  }
}

functions();
