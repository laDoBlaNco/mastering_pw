/**
 * What does blocking truly mean? When people say a function is
 * 'blocking the event loop', they mean it sits on the main call
 * stack long enough to hold up everything else. While that function
 * runs, no timer, network callback, promise reaction, or setImmediate()
 * task can break in
 *
 * A counterpart to this is 'starving the stack', which has the same
 * result, but its say promise reactions recursively holding the stack
 * hostage and never giving control back.
 */
const crypto = require("node:crypto");

const start = Date.now();

setTimeout(() => console.log("Timer was delayed."), 100);
// a timer delay is just a MINIMUM wait. There's no way to guarantee
// that it'll run a the millisecond it expires
// https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick

while (Date.now() - start < 500) {
  crypto.pbkdf2Sync("password", "salt", 1000, 64, "sha512");
}

console.log("Blocking work finished.");

/**
 * A single slow function can stall every other task in the application
 * Node can keep I/O from blocking the main stack, but it can't stop
 * CPU-heavy JS from freezing the thread.
 */