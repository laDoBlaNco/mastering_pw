/**
 * Type coercion leads to unintended consequences, so I need ot understand how, when and why
 * 
 */

function typeCoercion(){
  /**
   * Equality Operator (==):
   * The equality operator (==) performs type coercion when the operands are of different types.
   * This can lead to counter-intuitive results.
   */
  console.log(`"5" == 5: ${'5' == 5} as "5" is coerced to the nubmer 5 `);
  
}

typeCoercion();