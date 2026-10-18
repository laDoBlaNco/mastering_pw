function operators() {
  /**
   * Arithmetic Operators:
   * Arithmetic operators are used to perform mathematical operations between numeric operands
   */
  console.log(`10 + 5: ${10 + 5} - addition`);
  console.log(`10 - 5: ${10 - 5} - subtraction`);
  console.log(`10 * 5: ${10 * 5} - multiplication`);
  console.log(`10 / 5: ${10 / 5} - division`);
  console.log(`10 % 3: ${10 % 3} - remainder after division`);

  /**
   * Increment and Decrement Operators:
   * The increment (++) and decrement (--) operators are unary (pre or postfix) that add or subtract
   * 1 from their operand
   */
  let a = 1;
  a++; // same as  a += 1 or a = a + 1
  console.log(`Increment: a = ${a}`);
  a--; // same as a -= 1 or a = a - 1;
  console.log(`Decrement: a = ${a}`);

  /**
   * Comparison Operators:
   * Comparison operators are used to compare two values and return a boolean result
   */
  console.log(`10 > 5: ${10 > 5} - greater than`);
  console.log(`10 < 5: ${10 < 5} - less than`);
  console.log(`10 >= 10: ${10 >= 10} - greater than or equal to`);
  console.log(`10 <= 5: ${10 <= 5} - less than or equal to`);

  /**
   * Equality and Inequality Opertars:
   * Loose equality (==) performs type coercion, while strict equality (===) does not.
   */
  console.log(`"5" == 5: ${"5" == 5} - loose equality with type coercion`);
  console.log(
    `"5" === 5: ${"5" === 5} - strict equality without type coercion`,
  );

  /**
   * Logical Operators
   * Logical operators are typically used with boolean values, but they can be used with non-bool
   * values as well (coerced values)
   */
  console.log(`true && false: ${true && false} - AND operator`);
  console.log(`true || false: ${true || false} - OR operator`);
  console.log(`!true: ${!true} - NOT opator`);

  /**
   * Bitwise Operators:
   * Bitwise operators operate on the individual bits of integers
   */
  console.log(`5 & 1: ${5 & 1} - bitwise AND`);
  console.log(`5 | 1: ${5 | 1} - bitwise OR`);
  console.log(`~5: ${~5} - bitwise NOT (Inverts the bits)`);

  /**
   * Ternary Conditional Operator:
   * The ternary operator is a shorthand for an if-else statement. It takes 3 operands
   */
  let value = 10;
  let isEven = value % 2 === 0 ? "even" : "odd"; // condition ? true expr : false expr
  console.log(`Ternary Operator: ${value} is ${isEven}`);

  /**
   * Assignment Operators:
   * Assignment operators are used to assign value to variables
   */
  let b = 10;
  b += 5; // same as b = b + 5
  console.log(`b += 5: ${b}`);

  /**
   * Nullis Coalescing Operator (??):
   * This operator returns the right-hand  operand when the left-hand operand is null or undefined
   */
  const nullable = null;
  const fallback = "default";
  const result = nullable ?? fallback;
  console.log(`Nullish Coalescing: ${result}`);

  /**
   * Optional Chaining Operator (?.)
   * Allows me to read the value of a property located deep within a chain of connected objects
   * without having to check that each reference in the chain is valid
   */
  const obj = { x: { y: 42 } };
  console.log(`Optional Chaining: ${obj?.x?.y}`);
  console.log(`Optional Chaining: ${obj?.z?.y}`);
}

operators();
