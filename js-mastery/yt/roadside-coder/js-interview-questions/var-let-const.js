// scope - where variables can  be accessed

// global scope
var a = 5;

console.log(a);

// block scope
{
  var b = 10;
  let c = 20;
  const d = 30; // same as let
  console.log(c, d);
}
console.log(b);
// console.log(c); // Error: c is not defined (block scope)
// console.log(d); // Error: d is not defined (block scope)

// Varible shadowing:
function test() {
  var a = "Hello";
  let b = "Bye";

  if (true) {
    // block scope
    let a = "Hi"; // this shadows a from outside of block
    // var b = 'Goodbye'; // Error: Cannot redeclare block-scoped variable: b
    console.log(a);
  }
  console.log(a); // this is now from outside of block
}
test();
// let can shadow let and var, but var can't shadow let

// Declaration
var z;
var z; // var allows redeclaration in same scope no issue
let x;
// let x; // this can't be done with let or const
const y = 100;
// const y = 50;

// var and let can be declared with initialization, but const can't.
// const must be initialized
// var and let can also have values updated, but const can't

// Hoisting
// Related to the creation and execution phases of each execution context.
// During that creation phase the hoisting or creation and initialization of
// the variable declarations happen. During declaration all variables are hoisted
// and assigned undefined (but let and const are in the TDZ) and functions are
// hoisted or created with all of their code. So during the execution phase the code
// is run line by line. variables are assigned their vallues and functions executed to
// create more execution contexts and start again...if any variables are used before they
// are assigned they will be either undefined or a warning is thrown. Var can be used
// but 'undefined' and let and const will throw a warning saying that they aren't initialized.
// This behavior of TDZ is the answer to all of the bugs caused by var's undefined hoisting.
// TDZ = Temporal DeadZone = Time that variables (let, const) are created but not yet initialized
// Not just for variables, classes as well. 
console.log(count);
var count = 1;
// console.log(count2); // Cannot access 'count2' before initialization

let count2 = 1;

function abc() {
  // again in the function we have another execution context and a is hoisted and undefined
  // console.log(a,b,c); // b and c throw errors as above

  var a = 10;
  let b = 20;
  const c = 10;
}
abc();
