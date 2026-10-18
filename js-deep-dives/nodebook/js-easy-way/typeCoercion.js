/**
 * Type coercion leads to unintended consequences, so I need ot understand how, when and why
 *
 */

function typeCoercion() {
  /**
   * Equality Operator (==):
   * The equality operator (==) performs type coercion when the operands are of different types.
   * This can lead to counter-intuitive results.
   */
  console.log(`"5" == 5: ${"5" == 5} as "5" is coerced to the nubmer 5 `);

  /**
   * Inequality Operator (!=):
   * Much like the equality operator, the inequality operator (!=) also coerces types if they are different
   */
  console.log(`"5" != 5: ${"5" != 5} as "5" is coerced to the number 5`);

  /**
   * Strict Equality (===) and Inequality (!==):
   * Unlike their non-strict counterparts, these operators don't perform coercion, and they compare
   * both value and type
   */
  console.log(`"5" === 5: ${"5" === 5} as "5" is NOT coerced to the nubmer 5 `);
  console.log(`"5" !== 5: ${"5" !== 5} as "5" is not coerced to the number 5`);

  /**
   * Boolean Contexts:
   * When a non-boolean value is used in a context that expects a boolean, JS will coerce the value
   */
  if ("non-empty string") {
    // non-empty strings are coerced to true
    console.log("This will run because a non-empty string is truthy.");
  }

  /**
   * Number Contexts:
   * In numerical operations (excluding the + operator), non-numbers are coerced to numbers
   */
  console.log(`"5" * "2": ${'5' * '2'} as both strings are coerced to numbers`);
  
  /**
   * String Concatenation:
   * The + operator can be a bit tricky. It will concatenate strings, but if one operand is a number,
   * it will coerce the number to a string before concatentation
   */
  console.log(`5 + "5": ${5 + '5'} as the number 5 is coerced to a string (doesn't matter which side its on)`);
  
  /**
   * Array Coercion:
   * Arrays will be coerced into strings in specific situations, such as when used with the + operator
   */
  console.log(`[1,2] + [3, 4]: ${[1,2] + [3,4]} both arrays are coerced to strings an concat'd`);
  
  /**
   * Nuances and Caveats:
   * 1 - undefined and null are loosely equal to each other but not to any other value
   * 2 - When comparing with null using non-strict comparison, only undefined will be equal to it
   */
  console.log(`undefined == null: ${undefined == null} - a special case in JS`);
  console.log(`0 == null: ${0 == null} - because null is only loosely equal to undefined`);
  
  
}

typeCoercion();
