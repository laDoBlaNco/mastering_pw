/**
 * Nullish Coalescing Operator (??)
 * A logical operator that returns the right-hand operand when the left-hand operand is null\
 * or undefined, otherwise, it returns the left-hand operand
 */

// Basic Usage - assigning a default
const name = null;
const defaultName = "John Doe";
const username = name ?? defaultName;
console.log(`Username: ${username}`);

// Difference from logical OR (||) - only checks for null or undefined, while OR checks for
// any falsy value
const zeroValue = 0;
const orResult = zeroValue || "default";
const nullishResult = zeroValue ?? "default";
console.log(`OR result: ${orResult}`);
console.log(`Nullish Result: ${nullishResult}`);

// Combining with Ternary for more complex conditions
const age = null;
const ageValue = age ?? (age === 0 ? "Zero" : "Undefined");
console.log(`Age Value: ${ageValue}`);

// using in object properties for default values
const user = {
  firstName: "Jane",
};
const lastName = user?.lastName ?? "Doe";
console.log(`User's Last Name: ${lastName}`);

// Nuances and Advanced Techniques
/**
 * 1. Short-circuiting - similar to other logical operators, the nullish coalescing operator short-circuits
 *    meaning it won't evaluate the right-hand expression if it doesn't need to
 *
 * 2. Operator Precedence - need to be cautious with operator precedance when combining nullish
 *    coalescing with other operators. Using ()s can help maek the behavior explicit
 */
const result = 5 + (null ?? 2); //?

/**
 * 3. Type Considerations - Nullish coalescing is useful for avoiding unexpected type conversions, particulary
 *    when dealing with possible null or undefined values
 *
 * 4. Use Cases - It's commonly used in function arguments, object destructuring, and variable assignments
 *    to provide default values only when a variable is null or undefined, but not for other falsy values
 */
