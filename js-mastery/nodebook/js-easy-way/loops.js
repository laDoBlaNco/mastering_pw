function loops() {
  // For Loop
  console.log("For Loop:");
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // While Loop
  console.log("While Loop:");
  let j = 0;
  while (j < 5) {
    console.log(j);
    j++;
  }

  // Do-While Loop
  console.log("Do-while Loop");
  let k = 0;
  do {
    console.log(k);
    k++;
  } while (k < 5);

  // Array forEach Loop - executes a provided function once for each array element
  console.log("Array forEach Loop:");
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((item, index) => console.log(`Item at ${index}: ${item}`));

  // Loop Control Statements - break and continue
  console.log("Loop Control Statements");
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    if (i === 4) break;
    console.log(i);
  }

  // Nested Loops - be cautious here as nested loops lead to cuadratic time complexity
  console.log("Nested Loops:");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }

  // The for...in loop: it enumerates the propeties of Objects. It does not use Symbol.iterator and
  // was created specifically for enumerating JS objects
  // NOTE: It's not recommended to use for array iterations as it also enumerates prototype properties
  console.log("For...in Loop:");
  const obj = { a: 1, b: 2, c: 3 };
  for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }

  // The 'for...of loop: does use Symbol.iterator and was later created to iterate of actual values in
  // any iterable object like arrays, strings, maps, etc.

  console.log("For...of Loop:");
  const str = "Hello Node!";
  for (const char of str) {
    console.log(char);
  }
}

loops();
