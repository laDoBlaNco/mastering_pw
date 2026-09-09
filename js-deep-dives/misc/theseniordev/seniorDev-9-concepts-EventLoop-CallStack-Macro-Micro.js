/**
 * theSeniorDev -YouTube channel - 9 JavaScript Concepts That Got Me to Senior
 * 
 * 1. Event Loop is what executes JS code and its made of 3 parts
 *      Call Stack - sync code from top to bottom
 *      Macro-task Queue priorities are event listeners from the dom and Timer API, for example
 *      Micro-task Queue priorities are promise api, for example
 * 
 *      Tasks start in the macro queue (FIFO) and get pushed to the call stack where they are broken down into their functions
 *      Each function then gets its own Execution Context (Stack Frame: 'this', local vars, scope chain, )
 *      If a function execution creates a promise then it's callback will be stored in that promise api and its resolve is sent to the call stack
 *          if it does resolve then its callback gets pushed to the micro-task queue and waits to the end of the event loop iteration after it finishes all the function calls
 *      IF a function execution creates a Timer, its task will be placed in line on the macro-task queue for next tick
 *      After that iteration the EL will go to the macro-task queue and pick up its next task in its next tick
 *      (Example: what order will the console logs print in? '1', '4', '2', '3' - Sync code -> Promise -> Timer)
 *      
 * 2. Call Stack - explained above as its what runs the sync code
 * 3. Macro-task queue explainded above as its priority are the event listeners and Timers and is what pushes to the call stack on 
 *  each tick of the EL
 * 4. Micro-task queue explained above as its priority are promise callbacks which get pushed to the call stack at the end of each
 *  EL iteration but before the next iteration. So a promise callback (if resolved) will run prior to any callbacks in the macro-task
 *  queue
 */
function whosFirst(){
    console.log('1');

    new Promise((resolve,reject) => {
        resolve();
    }).then(() => {
        console.log('2');
    });

    setTimeout(() => {
        console.log('3');
    }, 0);

    console.log('4');
}
console.log("Who's First?:");

whosFirst();

