function destructuring() {
  // Array Destructuring
  const [first, second] = [1, 2];
  console.log(first);
  console.log(second);

  // skipping elements
  const [, , third] = [1, 2, 3];
  console.log(third);

  // Default Values
  const { name = "Kevin", job } = { age: 49, job: "JS Architect" };
  console.log(name);
  console.log(job);

  // Object Destructuring:
  const { a, b } = { a: 10, b: 20 };
  console.log(a);
  console.log(b);

  // Renaming Variables:
  const { x: alpha, y: beta } = { x: 1, y: 2 };
  console.log(alpha);
  console.log(beta);
  // console.log(x); // Error: x is not defined
  // console.log(y); // Error: y is not defined
  // ...so renaming means original property names don't work at all.

  // Nested Destructuring:
  const {
    p: { q },
  } = { p: { q: "Nested" } };
  console.log(q);

  // Function Parameter Destructuring - key for Playwright
  function greet({ name, age }) {
    console.log(`Hello, ${name}, You are ${age} years old.`);
  }
  greet({ name: "Ladoblanco", age: 49 });

  // Using Rest Syntax - Rest elements can also be destructured, separating the first item
  // from the rest of the array. This would help with linked lists, I think
  const [head, ...tail] = [1, 2, 3, 4];
  console.log(head);
  console.log(tail);

  // Mixed Destructuring: Arrays and objects can be destructured in a single statement for
  // complex structures
  const {
    x,
    y,
    z: [, zz],
  } = { x: 1, y: 2, z: [3, 4] };
  console.log(x,y,zz);
  
  /**
   * Destructuring Gotchas:
   * JS interprets the opening curly brace as a block statement. 
   * To destructure into an already declared variable, it should be wrapped in ()s
   */
  let foo;
  ({foo}) = {foo:'bar'}
  //({foo} = {foo: 'bar'}) // this also works
  console.log(foo);
  
}

destructuring();
