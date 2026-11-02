// Funtions in JS
// Function declarations
function square(num) {
  return num * num;
}
console.log(square(12));

// Function expression - declare a variable with a function as the value
// This uses a anonymous function (function without name)
const square2 = function (num) {
  return num * num;
};
console.log(square2(12));

// First Class Functions - functions are treated as any other data value
function displaySquare(fn, num) {
  console.log("The square is:", fn(num));
}

displaySquare(square, 5);

// IIFE - Immediately Invoked Function Expressions
(function square3(num) {
  console.log(num * num);
})(12);

// IFFE with closures
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// function scope
var num1 = 20,
  num2 = 3,
  name = "Roadside Coder";

function multiply(){
  return num1 * num2;
}
multiply(); //?

// a nested function example
function getScore(){
  // shadowiwng global scope (var are function scoped)
  var num1 = 2, num2 = 3;

  function add(){
    // name from global scope
    return `${name} scored ${num1 + num2}`;
  }
  return add();
}
getScore();//?

// Function scope output?
/*
for(var i=0;i<5;i++){
  setTimeout(()=>console.log(i),i*1000);
}
for(let i=0;i<5;i++){
  setTimeout(()=>console.log(i),i*1000);
}
*/

// Function Hoisting - functions are hoisted completed unlik variables
// that are hoisted without initialization
functionName(); // functions can be invoked before declaration
function functionName(){
  console.log('Roadside Coder');
}
// in Function scope it all works  the same since its part of the 
// execution context creation on every function call.

// Function Hoisting Output
var x = 21;
var fun = function(){
  console.log(x); // in the function scope local var is hoisted
  var x = 20;
}
fun();

// Params vs Arguments - Params are in the definition and arguments
// are in  the execution

// Output with spread operator:
// const fn = (a, ...numbers,x,y) => console.log(x,y);

// Callback functions
// a function passed as an arg into another function and relies on that
// function to call it when the time arrives
[1,2,3].map((n) => n * n); //? 
// map and many others take callbacks

// Arrow Functions:
const add = (num,num2) => num + num2;
// NOTE: these have an implicit when only one line
// NOTE: there is no 'arguments' keyword
// NOTE: 'this' context doesn't exist
let user = {
  username: 'Roadside Coder',
  // arrow function 'this' is global object
  rc1: () => console.log('Subscribe to:',this.username),
  // regular function/method this is  'user'
  rc2(){
    console.log('Subscribe to', this.username);
  }
}
user.rc1();
user.rc2();
