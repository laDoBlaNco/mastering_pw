/**
 * EVENT LOOP PHASES
 * 
 * Many people, incuding me, pictured the event loop as one big queue where
 * callbacks line-up. That was my first mental odel. IT IS NOT. It is an
 * ordered sequence of phases, and each phase has its own queue and its own
 * rules.The phases go by their traditional names
 *  • timers
 *  • pending callbacks
 *  • idle/prepare (internal)
 *  • poll (networking and I/O)
 *  • check (setImmediate)
 *  • close callbacks
 * 
 * The word 'tick' gets confused with 'process.nextTick()', again this happened
 * to me as well, which runs on the JS side rather than the native side, so
 * we use the term iteration here. 
 * 
 * OVERVIEW OF A SINGLE ITERATION 
 * 
 * An iteration is NOT a fixed unit of time 🤯🤯🤯. This is an aha moment. I've
 * always imagined an iteration or tick like it is in gui programming where we use
 * the tick of the clock as the loop start or refresh. But one pass can be
 * be very fast OR very slow 🤯🤯🤯 depending on how many callbacks are waiting
 * and how long the loop pauses for network or disk I/O (polling)
 * 
 * When the loop enters a phase, it does that phase's low-level native work first.
 * Then it runs the callbacks waiting in that phase's queue, usually first-in, first-
 * out. It keeps going until the queue is empty or it hits a built-in safety limit, then
 * it moves to the next phase.
 */