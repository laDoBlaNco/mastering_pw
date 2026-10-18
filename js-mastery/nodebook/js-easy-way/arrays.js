// Arrays in JS are list-like objects that allow us to store multiple values or objects in a
// single variable

function arrays() {
  // Array Declaration and Initialization
  const arr1 = [1, 2, 3];
  const arr2 = new Array(1, 2, 3);
  console.log(`Array Literal: ${arr1}`);
  console.log(`Array Constructor: ${arr2}`);

  // Array Length:
  console.log(`Array Length: ${arr1.length}`);

  // Accessing Array Elements: (zero-based indexing)
  console.log(`First Element: ${arr1[0]}`);

  // Modifying Array Elements:
  arr1[0] = 10;
  console.log(`Modified Array: ${arr1}`);

  // Array Methods - push, pop, shift, unshift - to add or remove elements from either end of array
  arr1.push(4);
  arr1.pop();
  arr1.shift();
  arr1.unshift(1);
  console.log(`After Push/Pop/Shift/Unshift: ${arr1}`);

  // Splice and Slice
  // splice() modifies an array by adding or remove elements - .splice(index,toDelete,toAdd)
  // slice() returns a shallow copy of a portion of an array
  const removed = arr1.splice(1, 1); //?
  const sliced = arr1.slice(1, 3); //?
  console.log(`After Splice: ${arr1}`);
  console.log(`Removed Elements: ${removed}`);
  console.log(`Sliced Elements: ${sliced}`);

  // forEach, map, filter, reduce -
  // High-order functions that allow for robust manipulation and iteration over arrays
  arr1.forEach((item) => console.log(`forEach: ${item}`));
  const mapped = arr1.map((item) => item * 2);
  const filtered = arr1.filter((item) => item > 1);
  const reduced = arr1.reduce((acc, curr) => acc + curr, 0);
  console.log(`Mapped: ${mapped}`);
  console.log(`Filtered: ${filtered}`);
  console.log(`Reduced: ${reduced}`);

  // Array Destructuring - allows me to unpack elements from arrarys and objects into separate variables
  const [first, second] = arr1;
  console.log(`Destructured: first = ${first}, second = ${second}`);

  // Spread Operator - allows me to spread an array into places where zero or more elements are expected
  const arr3 = [...arr1, 4, 5]; //?
  console.log(`Spread: ${arr3}`);

  // Checking Array Equality - JS doesn't provide a straightforward way to check array equality (both
  // value and type). I can compare them by iterating through them or converting them to strings
  const isEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
  console.log(`Array Equality: ${isEqual}`);

  // Multi-dimensional Arrays:
  const multiArray = [
    [1, 2],
    [3, 4],
  ]; //?
  console.log(`Multi-Dimensional Array: ${JSON.stringify(multiArray)}`);
}

arrays();
