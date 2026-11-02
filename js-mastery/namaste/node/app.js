//CommonJS Modules - cjs - this ext will explicitly turn your js
// file into a node CommonJS module. By default cjs is enabled
// so a .js file is basically a .cjs file. to turn into into a .mjs
// file without changing the ext, we need to set it in our package.json

// require('./xyz.js');
// const {calculateSum,x} = require('./sum.js');

// ES Modules - mjs imports and exports with different syntax. just as
// CommonJS is the default for node, mjs is the default for many frontend
// frameworks like React, Angular, MongoDB, etc
// CommonJS is a synchronous call
// code run in non-strict mode

/*
import { calculateSum, x } from "./calculate/sum.js";
import { calculateMultiply } from "./calculate/multiply.js";
*/

// Another way of importing NESTED modules is with the use of index.js.
import { calculateMultiply, calculateSum, x } from "./calculate/index.js";
// NOTE: that index.js is a convention, the file can be called anything
// if you use './calculate/index.js', but to just use './calculate' than
// we must use 'index.js' as that's what node is looking for.

// we can also import not js files as well, but specifying the type
// of file so it doesn't treat it like code
import data from "./data.json" with {type:'json'};

// using package.json {type:module} we must use file extension on import
// unlike CommonJS
// With ESM we can import modules asynchronously if needed.
// all code is run in 'strict mode' by default
// z = 100; // Error: z is not defined (due te be running in strict mode)

var name = "Namaste NodeJS";

var a = 10;

var b = 20;

// console.log(name);
// console.log(a + b);
// console.log(global);
// console.log(Object.getOwnPropertyNames(global));
// console.log(this);// empty object (module.exports)

// console.log(globalThis);
// proposed in ES22 or ES20 and represents all global objects no matter
// the host or the engine. Its the standard on global
// console.log(globalThis === global);
// let x = 100; // need to be careful here as this will either shadow or
// error due to clash with imported 'x'

calculateSum(a, b);
console.log(x);

calculateMultiply(a, b);
console.log(JSON.stringify(data));
