/**
 * Spread Operator: Expands an iterable (array, string, etc) into its elements.
 * Rest Operator: collects remaining elements or properties in an array or object.
 */
function spreadAndRest() {
  // Spread Operator in Arrays:
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2);

  // Spread Operator in Objects
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  console.log(obj2);

  // Combin objects with Spread:
  const obj3 = { a: 1, b: 2 };
  const obj4 = { b: 3, c: 4 };
  const obj5 = { ...obj4, ...obj3 };
  console.log(obj5); // just a test, but properties shadoww/overwrite prevous

  //Spread Operator in Function calls:
  const numbers = [1, 2, 3];
  console.log(Math.max(...numbers));

  // Rest Operator in Function Parameters
  function sum(...args) {
    return args.reduce((a, b) => a + b);
  }
  console.log(sum(1, 2, 3));

  // Rest Operator in Array Destructuring
  const [first, ...rest] = [1, 2, 3, 4];
  console.log(first);
  console.log(rest);

  // Rest Operator in Object Destructuring
  const { x, ...others } = { x: 1, y: 2, z: 3 };
  console.log(x);
  console.log(others);

  /**
   * Rest vs Spread -
   * The key difference is in the context where they are used.
   * The spread operator is used in variable assignment contexts to 'spread' elements or
   * properties.
   * The rest operator is used in variable declaration contexts to collect remaining elements
   * or properties.
   */
}

spreadAndRest();
