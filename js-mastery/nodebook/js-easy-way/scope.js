// Global Scope
let globalVar = "I'm global!";
console.log(`Global scope: ${globalVar}`);

function scopes() {
  // function scope
  function functionScopeDemo() {
    var functionVar = "I'm local to this function!";
    console.log(`Function Scope: ${functionVar}`);
  }
  functionScopeDemo();

  // block scope
  // 'let' and 'const' in blocks are block scoped unlike var which is function scopes
  {
    let blockVar = "I'm local to this block!";
    console.log(`Block Scope: ${blockVar}`);
  }

  // Hoisting - 'var' are hoisted to the top of their scope and automatically initialized with 'undefined'
  // 'let' and 'const' are ALSO hoisted but are not initialized, leading to ReferenceError for being in the
  // TDZ
  console.log(`Hoisting: varVar is ${varVar}`);
  var varVar = "I'm hoisted!";
  // console.log(`Hoisting: letVar is ${letVar}`); // Can't access before initializaiton
  let letVar = "I'm also hoisted but not initialized";

  // Shadowing
  let shadowVar = "I'm in the outer scope";
  {
    let shadowVar = "I'm in the inner scope";
    console.log(`Shadowing: ${shadowVar}`);
  }
  console.log(`Shadowing: ${shadowVar}`);

  // Closure - a function object that has access to its own scope as well as the scope of its
  // outer function and its lexical scope chain
  function outerFunction() {
    let outerVar = "I'm an outer variable";
    return function () {
      console.log(`Closure: ${outerVar}`);
    };
  }
  const myClosure = outerFunction();
  myClosure();

  // Lexical Scoping - means the scope of a variable is determined by its position in the code, not by
  // function calls or other runtime operations
  // Nested functions have access to variables in their outer scope.
  // Not sure I like this definition, so.... according to MDN...where it looks like he got this def
  /**
   * A closure is the combination of a function bundled together (enclosed) with references to its
   * surrounding state (the lexical environment). In other words, a closure gives a function access
   * to its outer scope. In JavaScript, closures are created every time a function is created, at
   * function creation time.
   *
   * This is an example of lexical scoping, which describes how a parser resolves variable names when
   * functions are nested. The word 'lexical' refers to the fact that lexical scope uses the location
   * where a variable is DECLARED within the source code to determine where that variable is avaiable.
   * Nested functionws have access to variables declared in their outer scope.
   */
  function lexicalOuter() {
    let lexicalVar = "I'm lexically outside!";
    function lexicalInner() {
      console.log(`Lexical Scoping: ${lexicalVar}`);
    }
    lexicalInner();
  }
  lexicalOuter();
}

scopes();
