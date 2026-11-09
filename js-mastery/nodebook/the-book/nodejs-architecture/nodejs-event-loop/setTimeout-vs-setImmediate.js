/**
 * setTimeout vs setImmediate
 *
 * This is precisely the clarification I was looking for and went to Claude
 * to get, so let's see how close Claude comes to the real thing.
 *
 * The question of which one runs first is worth understanding, since the answer
 * shows exactly how Node schedules work.
 *
 * setTimeout(...,0) vs setImmediate()
 *
 * The short answer is...it depends entirely on WHERE we call them.
 *
 *
 */

// Case 1 - Calling them from the main script
setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));

/**
 * Running the above we might see Timeout first or Immediate. The order is
 * unpredictable. A timer delay is a MINIMUM threshold, NOT an exact guarantee.
 * Depending on how fast the process starts, the timer can cross its threshold
 * before the loop even set up its phases. So production logic that depends
 * on the above isn't good.
 */

// Case 2 - Calling them from inside an I/O callback
const fs = require("node:fs");

fs.readFile(__filename, (err) => {
  if (err) throw err;

  setTimeout(() => console.log("Timeout"), 0);
  setImmediate(() => console.log("Immediate"));
});

/**
 * Here setImmediate() WILL ALWAYS run first. The file-reading callback runs inside
 * libuv's poll phase. When it finishes and schedules both the timer and the
 * immediate, the loop moves to the next step, the check phase, where setImmediate()
 * runs. The timer has to wait until the loop comes back around to the timer phase
 * (which since Node20 is the last phase after close callbacks)
 * 
 * This is exactly the answer I got from Claude. Good stuff!
 */
