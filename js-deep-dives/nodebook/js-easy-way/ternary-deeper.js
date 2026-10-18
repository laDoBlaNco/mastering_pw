/**
 * Conditional (Ternary) Operator:
 * The conditional (ternary) operator is a shorthand wway to perform conditional (if-else-like)
 * operations. The syntax is: condition ? expression1 (if true) : expression2 (if false)
 * If the condition is true expression1 is executed, otherwise, expression2 is executed
 */

/**
 * Basic Usage:
 * In a simple example, I can use it to assign a value to a variable based on a condition
 */
const isAdult = true;
const type = isAdult ? 'Adult' : 'Minor';
console.log(`Person is an: ${type}`);

/**
 * Nested Ternary Operators
 * Ternary operators can be nested for multiple conditions, but this may reduce readability
 */
const age = 25;
const ageGroup = age < 18 ? 'Minor' : age < 60 ? 'Adult' : 'Senior';
console.log(`Age Group: ${ageGroup}`);

/**
 * Using with Functions:
 * I can also execute functions as the expressions using the ternary operator 
 */
function greetMorning(){
  return 'Good Morning';
}
function greetEventing(){
  return 'Good Evening';
}

const isMorning = true;
console.log(isMorning ? greetMorning() : greetEventing());

/**
 * As an Expression
 * The ternary operator is an expression, meaning it returns a value 🤯🤯🤓
 * I can use it inline with other operations
 */
const score = 95;
console.log(`You ${score > 50 ? 'passed' : 'failed'} the exam`);

/**
 * Nuances and Advanced Techniques:
 * 
 * 1 - Type Coercion:
 * I should be cautious about type coercion when using the ternary operator, as it follows
 * the same rules as other JS operators
 * NOTE: so technically its not the ternary operator its still the other JS operators coercing in
 * this example at least
 */
const value = '5';
const number = value == 5 ? 'Loose equality' : 'Strict equality';
console.log(`Type Coercion: ${number}`);

/**
 * 2 - Avoid Side Effects:
 * Avoid using ternary operators for operations that produce side effects, like assignments
 * or function calls with side effects
 * 
 * 3 - Readability:
 * While chaining or nesting ternary operators can be powerful, it can also make code harder
 * to read and maintain.
 */