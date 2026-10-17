/**
 * The 'datatypes' function below will illustrate the variety of data types in JS:
 * 8 total though we have the special Array and Function types included below
 * - Undefined
 * - Null
 * - Boolean
 * - Number
 * - BigInt
 * - String
 * - Symbol
 * - Object
 * - Function
 * - Array
 */

function datatypes() {
  /**
   * Undefined:
   * An undefined type reps a variable that has been declared but not yet initialized with a value
   */
  let undefinedVar;
  console.log(`Undefined: ${undefinedVar}, typeof: ${typeof undefinedVar}`);

  // Null
  // The 'null' type signifies the INTENTIONAL absence of a value.
  // Note: 'typeof null' will return 'object', which is a longstanding bug in JS
  let nullVar = null;
  console.log(`Null: ${nullVar}, typeof: ${typeof nullVar}`);

  /**
   * Boolean:
   * The 'boolean' type has twow possible values: true and false
   */
  let bool = true;
  console.log(`Boolean: ${bool}, typeof: ${typeof bool}`);

  /**
   * Number:
   * The 'number' type can rep both integers and floating point numbers
   */
  let num = 42;
  let float = 42.42;
  console.log(`Number: ${num}, typeof: ${typeof num}`);
  console.log(`Floating-Point Number: ${float}, typeof: ${typeof float}`);

  /**
   * BigInt:
   * The 'BigInt' type can represent integers of arbitrary length
   */
  let bigInt = 42n;
  console.log(`BigInt: ${bigInt}, typeof: ${typeof bigInt}`);

  /**
   * String:
   * The 'string' type represents textual data
   */
  let str = "Hello";
  console.log(`String: ${str}, typeof: ${typeof str}`);

  /**
   * Symbol:
   * The 'Symbol' type reps a unique value that's not equal to any other value
   */
  let sym = Symbol('a description');
  console.log(`Symbol: ${String(sym)}, typeof: ${typeof sym}`);
  
  /**
   * Object:
   * The 'object' type represents a collection of key-value pairs
   */
  let obj = {key:'value'};
  console.log(`Object: ${JSON.stringify(obj)}, typeof: ${typeof obj}`);

  /**
   * Function:
   * Functions in JS are objects with the capability of being callable
   */
  function func(){}
  console.log(`Function: ${func}, typeof: ${typeof func}`)

  /**
   * Array:
   * Arrays are specialized objects used to store multiple values in a single variable
   */
  let arr = [1,2,3,4,5];
  console.log(`Array: ${arr}, typeof: ${typeof arr}`)
  
  /**
   * Nuances:
   * Null is a falsy value but it's not the boolean false
   */
  console.log(`Nuances: Null is falsy but not false: ${Boolean(nullVar)  === false && nullVar !== false}`);
  
}

datatypes();
