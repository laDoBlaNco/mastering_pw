
/**
 * The 'this' keyword refers to the object it belongs to, but in JS its value can differ
 * based on how it's used.
 */

// in Global Context
console.log(this); // in browser this wwould be Window, here its module.exports
// In Node each JS file is treated as an isolated module. The whole reason why let, const,
// class don't pollute the global scope and 'await' can be at top-level. To make this isolation
// work, Nodejs wraps our file's code inside an invisible function before executing it. 
// Inside the context of this module wrapper, 'this' is bound directly to module.exports,
// which defaults to an empty object{}



function thisKeyword(){
  /**
   * Function Context:
   * Inside a regular function, the value of 'this' varies. 
   * In strict mode, it is undefined. Otherwise, it's the global object
   */
  function regularFunction(){
    'use strict';
    console.log(this);
  }
  regularFunction()

  /**
   * Object Context:
   * In a method, which is a function stored as an object property, 'this' refers to the
   * object.
   */
  const obj = {
    name: 'Ladoblanco',
    greet: function(){// must be 'function declaration' and not => function
      console.log(`Hello, my name is ${this.name}`);
    },
  }
  obj.greet();

  /**
   * Constructor Context
   * In a constructor function, 'this' refers to the object that the constructor
   * creates (or will create)
   */
  function Person(name){
    this.name = name;
  }
  const bob = new Person('Bob');
  console.log(bob.name);

  /**
   * Event Handler Context:
   * In an event handler, 'this' refers to the DOM element that received the event.
   */
  // HTML: <button id="myButton">Click Me</button>
  // document.getElementById('myButton').addEventListener('click', function(){
  //   console.log(this.id);
  // });

  /**
   * Explicit Binding:
   * Using methods like 'call()', 'apply()', and 'bind()' we can explicitly set what 'this'
   * refers to.
   */
  function showName(label){
    console.log(`${label}: ${this.name}`);
  }
  const kevin = {name: 'Ladoblanco'};
  showName.call(kevin,'User');

  /**
   * Arrow Function:
   * Arroww functions don't have their own 'this'. Instead they inherit 'this' from their
   * surrounding function context.
   */
  const arrowFunc = () => {
    console.log(this);
  }
  arrowFunc();
}
thisKeyword();