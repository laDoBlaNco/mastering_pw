function controlFlow() {
  // if-else statement
  const x = 10;
  if (x > 5) {
    console.log("x is greater than 5");
  } else {
    console.log("x is not greater than 5");
  }

  // if-else-if laddering
  const y = 20;
  if (y > 50) {
    console.log("y is greater than 50");
  } else if (y > 10) {
    console.log("y is greater than 10 but less than or equal to 50");
  } else {
    console.log("y is less than or equal to 10");
  }

  // Ternary Conditional Operator (?:)
  const z = 30;
  const result = z > 25 ? "z is greater than 25" : "z is not greater than 25";
  console.log(`Ternary operator: ${result}`);

  // switch-case Statement - useful for decision-making amount multiple case clauses. 'break' is used
  // to exit a case once a match is found
  const fruit = "apple";
  switch (fruit) {
    case "banana":
      console.log("It's a banana!");
      break;
    case "apple":
      console.log("It's an apple!");
      break;
    default:
      console.log("Unknown fruit.");
  }

  // Falsy values and Truthy values
  // false, 0, -0, 0n, '', null, undefined, NaN
  // All other values are considered Truthy
  if ("") {
    console.log("This won't be logged, because an empty string is falsy.");
  } else {
    console.log("An empty string is a falsy value.");
  }

  // Short-circuit evaluation - logical operators can be used for conditions, but they can also be
  // used to evaluate and return expressions
  const output = null || 'Default Value';
  console.log(`Short-circuit: ${output}`);
  
  // Nullish Coalescing
  const value = null ?? 'Fallback';
  console.log(`Nullish Coalescing: ${value}`);
  
}

controlFlow();
