// variables.js
//
/**
 * This function demonstrates various aspects of varible declaration and scoping in JS, which includes
 *
 * - Global scope
 * - Function scope (var)
 * - Block scope (let and const)
 * - Hoisting
 * - Temporal Dead Zone (TDZ)
 * - Variable Shadowing
 * - Variable Redeclaration
 *
 */ /**
 * Global Scope:
 * Variable sdeclared outside of any function or block are in the 'global scope'. They can be accessed and modified
 * from any part of my code.
 */
let globalVar = "I am a global variable";
console.log(`Global Scope: globalVar = ${globalVar}`);

function variables() {
  /**
   * 'var' declaration
   * Variables declared with 'var' are function-scoped. Their visibility is limited to the function where they are declared
   *
   * Hoisting:
   * Variables and function declarations are moved, or 'hoisted' to the top of their containing scope during the compilation
   * phase.
   */
  console.log(`Hoisting with 'var': a = ${a}`);
  var a = 10;
  console.log(`Hoisting with 'var': a = ${a}`);

  /**
   * 'let' declaration:
   *
   * Variables declared using 'let' are block-scoped.They are only accessible within the block in which they are contained
   *
   * Temporal Dead Zone (TDZ):
   * 'let' and 'const' declarations are not initialized, so accessing them before their declaration results in a
   * ReferenceError
   */
  // console.log(`TDZ with "let": c = ${c}`);
  let c = 30;
  console.log(`TDZ with "let": c = ${c}`);

  /**
   * 'const' declaration:
   * Variables declared using 'const' are block-scoped and can't be reassigned after they are initialized
   *
   * Note: 'const' makes a variable ITSELF immutable, but if it points to an object ({} []), the object's
   * properties can still be modified
   */
  const e = 50;
  console.log(`const Declaration: e = ${e}`);
  const obj = { key: "value" };
  // obj = {}; // Assignment to constant variable
  obj.key = "new_value"; // this is allowed
  console.log(`const object modification: obj.key = ${obj.key}`);

  /**
   * Variable Shadowing
   * Varibles can 'shadow' an outer variable by having the same name. The inner variable will 'overshadow'
   * the outer one within its scope
   */
  {
    let c = 60;
    const e = 70;
    console.log(`Shadowwing: Inner scope: c = ${c}, e = ${e}`);
  }
  console.log(`Shadowing: Outer scope: c = ${c} e = ${e}`);
  
  /**
   * Variable Redeclaration
   * Variables declared with 'var' can be redeclared in the same scope. However 'let' and 'const' cannot
   * be redeclared in the same scope
   */
  var a = 80; // allowed
  // let c = 90;// Cannot redeclared block-scoped variable
  // const e = 100; // Cannot redeclared block-scoped variable
}

variables();

// globleVar is STILL accessible outside our function as well
console.log(`Global Scope: Accessing globalVar outside function: ${globalVar}`);

