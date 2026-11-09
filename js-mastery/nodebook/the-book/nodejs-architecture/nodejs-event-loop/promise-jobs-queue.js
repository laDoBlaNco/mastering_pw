/**
 * Promises run on V8's microtask queue. When a promise resolves or
 * rejects, the callbacks we attached with .then(), .catch(),or finally()
 * get queued there. async/await uses the same queue to resume after an
 * awaited promise settles as its all just promises in the end.
 * 
 * In CommonJS top-level code or a regular event-loop callback, the order
 * is fixed:
 * 
 * 1. Run the current JS code or phase callback until it completely finishes.
 * 2. Drain the ENTIRE nextTick queue before doing anything else.
 * 3. Drain the V8 microtask queue right after.
 * 4. Move on to the next callback or event-loop phase. 
 * 
 * Now in module format things change. Which is why we say process.nextTick
 * is officially legacy (use queueMicrotask()). CommonJS is officially stable,
 * but new code and packages are trending towards EMS. 
 * 
 * ECMAScript module (ESM) top-level
 * code is evaluated as part of V8's microtask processing. So promises and
 * queueMicrotask() callbacks started at the top level of an ESM file will
 * run BEFORE process.nextTick() callbacks. In a CommonJS file it is reversed,
 * process.nextTick() always runs before those promise jobs 🤓🤯🤯🤯
 * 
 * Here is how the order works out. 'Microtasks' here means promise reactions
 * and queueMicrotask() callbacks
 * 
 * CommonJS top level ==> stack -> next tick -> microtasks -> event-loop work
 * ESM top level ==> module microtask -> microtasks -> next tick -> event-loop work
 * Phase callback ==> callback -> next tick -> microtasks -> next phase or callback
 * 
 * So it looks like the only difference is is cjs vs esm top-level, otherwise
 * for backwards compatibility its still always nextTick -> microtask
 * 
 * When we await something the code before await runs synchronously until the
 * async function pauses. The rest of the function resumes as a promise reaction
 * after the awaited value settles. As if it was in a .then() call
 */

/**
 * A COMPLEX EXECUTION ORDER ANALYSIS:
 * This CommonJS example leaves out top-level zero-delay timers so the output
 * is the same on every run:
 */

const fs = require('node:fs');

console.log('1. Start');
Promise.resolve().then(() => console.log('4. Promise'));
process.nextTick(() => console.log('3. nextTick'));

fs.readFile(__filename,(error)=>{
  if(error) throw error;

  console.log('5. I/O Callback');
  setTimeout(()=>console.log('9. Timeout from I/O'),0);
  setImmediate(()=>console.log('8. Immediate from I/O'));
  process.nextTick(()=>console.log('6. nextTick from I/O'));
  Promise.resolve().then(()=> console.log('7. Promise from I/O'));
});

console.log('2. End');

/**
 * The order has nothing to do with the API names. It is driven ENTIRELY
 * by WHERE each task is scheduled.
 * 
 * first, '1. Start' and '2. End' print synchronously, since they run 
 * directly on the main call stack (top-level). Wwhen the main script finishes
 * and the stack clears, Node drains its high-priority queues, process.nextTick()
 * first, then v8 promise jobs from that same top level. (3,4)
 * 
 * A moment later the file read finishes and the fs.readFile callback fires
 * from an I/O path. INSIDE that callback (5), before Node moves past the return
 * point and continues the loop, it clears the new next-tick and promise callbacks
 * created in the handler (6,7). Only when those queues are empty does Node
 * advance. The immediate callback runs next in the check phase (8), and the zero-
 * delay timer waits for the timers phase, which comes after check and close
 * in Node 20+. A 0ms delay is treated as 1ms, so it may even slip to a later
 * iteration, but it can never beat the immediate.  
 * 
 * Add a top-level setTimeout(...,0) next to the fs.readFile() call and 
 * we CAN NOT expect one fixed output. We get a race condition. On newer
 * Node versions, that timer and the file callback can swap places depending 
 * on the startup speed, machine-specific timer thresholds, and how fast
 * the operating system finishes the read. If one cb holds control too long
 * we then have a performance problem. 
 */

/*
This is from a Claude session clarifying the order of setImmediate (check phase) 
and timer phase. The docs and nodebook make it a little unclear using 
the phrasing that timers run AFTER polling. But it doesn't mean RIGHT 
AFTER polling:

Close. The phrase that tripped you up is “timers run after poll.” 
It means later in the iteration than poll, not immediately after 
poll. Since Node 20, timers are the last phase of each iteration, 
after check and close:

poll   →  check  →  close  →  timers
(5,6,7)   (8)                 (9)

Walking through the I/O part of your example:

Poll phase: the readFile callback runs (5). It registers a timer, 
an immediate, a nextTick and a promise. The callback finishes, then 
the drain runs: nextTick (6), then the promise (7).
Check phase comes right after poll: the immediate runs (8).
Close phase: nothing to do here.
Timers phase: if at least 1ms has passed since the timer was set, 
it runs (9). If not, it waits for a later pass. Either way, it can’t 
come before 8.

So your instinct about where the timer was set is right, and it’s 
what makes this order deterministic. The timer was created during 
poll, and from poll, the check phase is always the next stop that 
has callbacks. Older Node (before v20), where timers ran at the 
start of the next iteration, gave the same order: poll → check → 
(next iteration) timers. Both layouts put check before timers when 
you start from poll.

That’s also why the NodeBook example avoids top-level zero-delay 
timers. From the main module, there’s no poll phase to start from, 
so it’s a race on whether 1ms has passed by the first timers pass. 
Inside an I/O callback, “check before timers” is guaranteed.

One wording tweak for your notes. Instead of “the zero-delay timer 
waits until after the check phase finishes,” write:

The timer waits for the timers phase, which comes after check and 
close in Node 20+. A 0ms delay is treated as 1ms, so it may even 
slip to a later iteration, but it can never beat the immediate.

*/