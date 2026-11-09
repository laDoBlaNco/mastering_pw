
/**
 * MICROTASKS, PHASE CALLBACKS, AND NEXTTICK
 * 
 * The libuv phases tell us where timers, I/O, immediates, and close
 * callbacks come from. They don't tell us the entire order. Node also
 * keeps high-priority queues that it drains EVERY time a JS callback
 * finishes.
 * 
 * PHASE CALLBACKS VS MICROTASKS
 * 
 * Browser documentation calls things like timers and I/O 'macrotasks'.
 * In Node it is clearer to call  the 'phase callbacks', the callbacks
 * tied directly to libuv's phases, timers, pending callbacks, poll,
 * check, and close events.
 * 
 * Two higher-priority queues sit on top of these phaes callbacks. This 
 * is the part to get right when designing solutions and debugging:
 * 
 * 1. THE NEXT TICK QUEUE is managed entirely by Node, and it is where callbacks
 *    end up whenever we call 'process.nextTick()'
 * 2. THE V8 MICROTASK QUEUE is managed by V8 itself, housing promise reaactions
 *    and anything we schedule with 'queueMicrotask()'.
 * 
 * The moment Node reaches a JS callback return point, it drains the next
 * tick queue first, than V8 microtask queue, before moving to the next
 * callback or event-loop phase. That is why a promise reaction scheduled 
 * inside a timer callback runs BEFORE the next timer callback in that
 * same phase.
 * 
 Per a claude session on the topic:
  
 After each callback. Since Node 11, a phase with three callbacks 
 runs like this:
 
 callback 1 → drain nextTick → drain promises
 callback 2 → drain nextTick → drain promises
 callback 3 → drain nextTick → drain promises
 → next phase
 
 Callbacks are never stacked up together. EACH ONE goes onto the empty 
 call stack ALONE, runs to completion and pops. That empty stack is 
 what triggers the drain. Only after both priority queues are fully
 empty does the loop take the next callback, whether it’s in the 
 same phase or the next one.
 
 Below both timers expire in the same timers phase, yet p1 runs BETWEEN them.
 If the drain happened between phases, we'd see t1,t2,p1,p2, which is what Node
 did pre node 11. That older behavior is whwy some diagrams and tutorials still
 show the drain between phases. 
*/
 setTimeout(() => {
   console.log("t1");
   Promise.resolve().then(() => console.log("p1"));
   process.nextTick(() => console.log('  tick1'));
 });
 setTimeout(() => {
   console.log("t2");
   Promise.resolve().then(() => console.log("p2"));
   process.nextTick(() => console.log('  tick2'));
 });
 
 setTimeout(() => {
   console.log('t1');
   Promise.resolve().then(() => {
     console.log('  p1');
     process.nextTick(() => console.log('  tick from inside p1'));
   });
 });

