/**
 * Error handling allows us to gracefully handle exceptions and continue the program's
 * execution
 */
function errorHandling() {
  // Basic try-catch
  try {
    // code that could throw an error
    const x = JSON.parse('{"name":"Ladoblanco"}');
  } catch (e) {
    // code to execute if an error occurs in the try block
    console.error("An error occurred:", e);
  }

  // The Finally Block
  try {
    // code that could error
  } catch (e) {
  } finally {
    console.log("Finally block executed");
  }

  // Throwing Exceptions
  try {
    throw new Error("This is a custom error");
  } catch (e) {
    console.error("Caught a custom error:", e);
  }

  /**
   * Nuance: Catching Multiple Error Types
   * In complex applications, multiple types of errors can occur.
   * Wwe can use 'instanceof' or other properties to distinguish between them
   */
  try {
    //code that could throw multiple types of errors
    throw new SyntaxError("A syntax error for demonstration purposes");
  } catch (e) {
    if (e instanceof TypeError) {
      console.error("Type Error:", e);
    } else if (e instanceof SyntaxError) {
      console.error("Syntax Error:", e);
    } else {
      console.error("Unknown error:", e);
    }
  }

  /**
   * Nuance: Catch Without Variable
   * JS allows catch blocks without specifying the error variable.
   * However, this isn't recommended as we lose the error details, making debugging difficult.
   * Industry standard uses the variable
   */
  try {
    throw new Error("Some error");
  } catch {
    console.error("An error occurred, but we're not displaying it");
  }

  /**
   * Nuance: Optional Catch Binding
   * ECMAScript 2019 onwards permits the use of catch blocks without an error variable.
   * While syntactically valid, this is generally not advised unless we have a very specific
   * reason to do so. I think this is a repeat of above.
   */
  try {
    // some code that might throw an error
  } catch {
    // handle the error without capturing its details
  }

  /**
   * Bonus: Re-Throwing Errors
   * Sometimes, we might catch an error to log or modify it, but then want the error to
   * bubble up.
   * We can 're-throw' the error after catching it.
   */
  try{
    throw new Error('An error to be re-thrown');
  }catch(e){
    console.error('Logging the error before re-throwing:',e);
    throw e;
  }
}
// here we seen the error bubbling up to the top with no more catches to handle. 
// that's why in the end we crash. 🟥
errorHandling();
