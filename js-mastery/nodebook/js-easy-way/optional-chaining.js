/**
 * Optional Chaining (?.)
 * Permits reading the value of a property located deep within a chain of connected
 * objects without having to expressly validate that each reference in the chain is valid
 * It short-circuits if it encounters a null or undefined, returning undefined as
 * the evaluation result.
 */

/**
 * Basic Usage - Optional chaining is used to safely access deeply nested properties of an
 * object
 */
const user = {
  profile: {
    name: "John",
    age: 30,
  },
};

const username = user?.profile?.name;
console.log(`User name: ${username}`);

/**
 * Accessing Array Items
 * We can also use optional chaining when attempting to access an index of an array that might be
 * undefined
 */
const arr = [1, 2, 3];
const value = arr?.[4];
console.log(`Array Value: ${value}`);

/**
 * Function or Method Calls
 * We can also use optional chaining when calling a function or method that might not exist
 */
const greet = user?.profile?.greet?.();
console.log(`Greeting: ${greet}`);

/**
 * Combined with Nullish Coalescing
 * Optional chaining can be combined wiwth the nullish coalescing operator for setting defaults
 * as well
 */
const city = user?.profile?.address?.city ?? 'Unknown';
console.log(`City: ${city}`);

/**
 * Nuances and Advanced Techniques:
 * 
 * 1. Short-Circuiting
 *    If optional chaining encounters null or undefined, it short-circuits the rest of the evaluation
 */
const obj = {prop: null};
const shortCircuit = obj?.prop?.nonExistentMethod?.()
console.log(`Short-Circuit Result: ${shortCircuit}`);

/**
 * 2. Operator Precedence
 *    To avoid any ambiguity when combining optional chaining with other operators, use ()s
 */
const mixed = {value:5};
const ambiguous = mixed?.value + 1; // this will result in 6 as expected
const clarified = (mixed?.value) + 1; // use ()s to make the operation order explicit
console.log(`Ambiguous: ${ambiguous}`);
console.log(`Clarified: ${clarified}`);

/**
 * 3. Functionality Limitation:
 *    The operator only checks for null or undefined, but not for other falsy values like 0 or ''.
 *    NOTE: I don't see why that would be a limitation. When would optional chaining be limiting us
 *    with the use of 0 or ''.
 */
const zeroCheck = {zero:0};
const zeroValue = zeroCheck?.zero ?? 'No Value';
console.log(`Zero Value: ${zeroValue}`);


