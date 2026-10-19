/**
 * Error object in JS: The error object is a built-in obj in js that provides information about
 * errors that a script is running. It's a way to handle both custom and system-generated
 * exceptions
 */

// Creating a simple Error - an instance of the Error object using the Error constructor functions
const simpleError = new Error("Something went wrong");

/**
 * The Error object contains a message property that describes the error. The above code creates
 * a new instance of the Error object with the message "Something went wrong"
 */

// Throwing Errors - halts the normal execution of code and bubbles up the flow wto the nearest catch
// block (if there is one)
function throwError() {
  throw new Error("An error occurred");
}

try {
  throwError();
} catch (error) {
  console.error(error.message); // NOTE this didn't stop quokka or crash the script since we caught it
}

/**
 * Here, the function 'throwError' throws an error, which is caught by the catch block. The message is then
 * sent to the console
 */

/**
 * Handling Errors With Try-Catch:
 * The try-catch statement allows us to handle errors gracefully without breaking our entire code
 */

function add(a, b) {
  if (typeof a !== "string" || typeof b !== "string")
    throw new Error("You must use numbers");
  return a + b;
}

try {
  // potentially error-prone code
  const sum = add(5, "ten");
  console.log(sum);
} catch (error) {
  console.error("An error occurred:", error.message);
}

/**
 * The 'add' function is supposed to do numerical addition, but a string is passed instead. This would
 * typically result in an error, but the catch block catches it and prints the error message.
 */

/**
 * Custom Errors - We can create custom error types by extending the Error class to handle specific
 * kinds  of errors
 */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// usage
try {
  throw new ValidationError("Invalid input");
} catch (e) {
  if (e instanceof ValidationError) {
    console.error(`Custom error caught: ${e.message}`);
  } else {
    console.error(`Uknown error: ${e.message}`);
  }
}

/**
 * The custom ValidationError class extends the native Error class. It can be thrown and caught
 * just like any other error but allows for more specific handling
 */

/**
 * Nuances and Advanced Techniques:
 *
 * 1. Stack Trace: The stack trace is a property of the Error object that provides information about the
 *    function call leading up to the error
 */
try {
  throw new Error("An error occurred");
} catch (error) {
  console.error(error.stack);
}
// Output will display an error message along with the function calls that led up to the error.

/**
 * 2. Catching Multiple Error Types: we can catch and handle multiple types of errors using
 *    'instanceof' in a catchblock with if-else-if laddering or a switch statement
 */
try {
  // potentially bad code, though this catch won't run since out 'try' is empty
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type Error:", error.message);
  } else if (error instanceof ReferenceError) {
    console.error("Reference Error:", error.message);
  }
}
// output depends on the the type of error thrownw, a specific error message will be logged

/**
 * 3. Error Handling with Promises - Errors can be caught in a Promise chain using the .catch method
 */
fetch("invalid/url")
  .then((resonse) => Response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch Error:", error.message));
// Just like a try-catch, our code doesn't break since we handled it

/**
 * 4. Finally Block: The 'finally' block will be executed regardless of whether an error wwas thrown
 *    or not.
 */
try {
  // some code that may throw an error
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Cleanup code runs regardless");
}

/**
 * Async/Awwait Error Handling: Just like Promises we can elegantly bubble up errors, but we can use
 * a normal try-catch block just like with synchrounous code.
 */
async function fetchData() {
  try {
    const response = await fetch("some/bad/url");
    const data = await response.json();
  } catch (e) {
    console.error("Fetch Error:", e.message);
  }
}
fetchData();
