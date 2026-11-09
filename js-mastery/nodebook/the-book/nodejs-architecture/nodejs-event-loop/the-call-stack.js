/**
 * The stack is last-in, first-out. When one function calls another,
 * the new frame goes on the top of the caller in the stack. Wwhen that
 * inner function returns, its frame is popped off and control returns
 * or drops back to the frame underneath. (another good example of this
 * is with middleware running on the request response cycle)
 */
function third() {
  console.log("Three");
}

function second() {
  console.log("Two");
  third();
  console.log("Done with second");
}

second();
