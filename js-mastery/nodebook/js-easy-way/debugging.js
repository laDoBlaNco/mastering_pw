function debugging(){
  /**
   * Console Debugging:
   * The console.log() method is a basic yet powerful debugging tool. We can print
   * variable values, objects, or diagnostic messages to the console for inspection
   */
  const someValue = 42;
  console.log('Value:',someValue);

  /**
   * Debugger keyword:
   * Inserting the 'debugger' statement into our code will cause the javascript execution to
   * pause if the browser's dev tools are open. This allows us to inspect the current state
   * of our program
   */
  function problematicFunction(){
    debugger;
    // additional code that we may want to inspect line by line
  }

  /**
   * Strack Trace:
   * When an error occurs or when manually thrown, JS provides stack traces of its propogation
   * to help identify where the issue lies.
   */
  function a(){
    b();
  }
  function b(){
    c();
  }
  function c(){
    console.trace();
  }
  c();

  /**
   * Breakpoints:
   * In browser development tools or IDEs like vscode, we can set breakpoints directly in
   * the source code. This will pause execution at that line, much like the debugger statement,
   * enabling us to inspect variables, the call stack, and more.
   */

  /**
   * Step Debugging:
   * While at a breakpoint (or debugger statement), we can 'step' through the code line by line.
   * This helps us to  understand the code flow and identify issues.
   */

  /**
   * Watch Expressions:
   * Most debuggers allow us to define expressions that are evaluated whenever code execution
   * stops. This is helpful for tracking the values of variables or expressions over time.
   */

  /**
   * Network Requests:
   * In browser dev tools, there's usually a 'Network' tab that lets us inspect all network
   * activity. This is indispensable for debugging issues related to API calls, file loads,
   * and other server interactions
   */

  /**
   * Performance Profiling:
   * Dev tools offer performance profiling features to record and analyze runtime behavior.
   * This can help us identify bottlenecks, memory leaks, and other performance issues.
   */

  /**
   * Source Maps:
   * Source Maps map our bundled or minified code back to the original source code. This
   * is extremely helpful if we're using transpilers like Babel or bundlers like webpack
   * or vite.
   */

  /**
   * Exception Handling
   * The try/catch/finally blocks allow us to handle exceptions gracefully and output custom
   * debug information
   */
  try{
    // code that may fail
    JSON.parse('invalidJson');
  }catch(err){
    console.error('Caught an error:',err)
  }

  /**
   * Conditional Breakpoints:
   * These are breakpoints that only get triggered whwen a specific condition is met.
   * Useful for debugging issues that only occur in certain situations.
   */

  /**
   * Bonus: Log Levels
   * Apart from console.log we can also use console.info, console.warn, and console.error
   * to log messages of different severity levels
   * Not All Console Methods are the Same:
   * Different levels of console logging methods can display information differently in the
   * console. These can help to classify and filter messages during debugging.  
   */
  console.info('This is an info message');
  console.warn('This is a warning');
  console.error('This is an error');

  /**
   * Bonus: Debug Function:
   * The console.debug() function wowrks similarly to console.log,
   * but many browsers allow us to enable or disable debug-level messages for finer
   * control
   */
  console.debug('This is a debug message');

  /**
   * Timing Debugging
   * Use console.time() and console.timeEnd() allows us to measure the time taken for 
   * a particular operation. This can be helpful in identifying bottlenecks or performance
   * issues
   */
  console.time('Example Timer');
  for(let i=0;i<1000000;i++){
    // some operation
  }
  console.timeEnd('Example Timer');

  /**
   * Monitoring Events:
   * The monitorEvents() function available in the browser console can be used to debug
   * events. We can specify which events on a particular DOM element we want to monitor.
   * 
   * Example usage in browser console:
   * monitorEvents(window, ['click', 'resize']);
   */

  /**
   * Async Stack Traces:
   * Modeern development environments show asynchronous stack traces, allowing us to debug
   * async code. This helps us to understand the sequence of async operations that led to a
   * specific state or error.
   */

  /**
   * Code Minification:
   * Minified code is hard to debug. Source maps are essential to map the minified code back
   * to the original source.
   * This is particularly useful for debugging production issues.
   */

  /**
   * Live Edit:
   * Some IDEs and browser dev tools allow wus to modify the code live during debugging.
   * This is very useful for testing quick changes without restarting the sessions
   */

  /**
   * Hidden Breakpoints and Debug Statements:
   * Always ensure that we haven't left any unintentional breakpoints, debugger statements
   * or console.log statements. These can have a performance impact and may cause unintended
   * behavior as well as be a security issue
   */

  /**
   * JSON.stringify Limitations:
   * Be cautious when using JSON.stringify to debug objects with circular references, 
   * a it throws an error. Consider using custom serialization for other methods to
   * handle such cases. I ran into this in an app when trying to console.log(global) in node
   * 
   * Example:
   * const circularObj = {};
   * circularObj.circular = circularObj;
   * 
   * // This will throw an error
   * // JSON.stringify(circularObj);
   */
}

debugging();