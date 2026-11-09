/**
 * THE HIGHEST PRIORITY QUEUE: process.nextTick()
 * 
 * The name is misleading. process.nextTick() does NOT wait for the next
 * event-loop iteration (tick as I used to think). It fires as soon as the
 * current operation on the call stack finishes, right before Node takes
 * its next steps in the loop, whether that be promise reactions or 
 * pushing another queued callback onto the stack.
 * 
 * The Node.js docs mark process.nextTick() as LEGACY. For deferring a task,
 * we SHOULD DEFAULT TO queueMicrotask(). WE ONLY NEED nextTick FOR OLDER
 * CALLBACK API CONTRACTS or when we want to pass extra arguments to the
 * deferred function.
 * 
 * Node empties the nextTick queue completely before if moves on, so
 * just like promise reactions, recursive process.nextTick() calls
 * will lockup the app and starve our timers and I/O. That starvation
 * risk is the reason not to reach for it by default. Below we can see
 * a bounded example of this behavior:
 */
let count = 0;
const LIMIT = 5;

function repeatWithNextTick(){
  console.log(`nextTick callback: ${++count}`);
  if(count < LIMIT ) process.nextTick(repeatWithNextTick);
}

setTimeout(()=>console.log('Timer ran after nextTick emptied.'),0);
repeatWithNextTick();

/**
 * The first repeatWithNextTick() call runs synchronously and leaves a 
 * second call queued in process.nextTick(). When the main script finishes,
 * Node drains the next tick queue before it touches the timer. Each
 * next-tick callback schedules the next one until 'count' reachs 'LIMIT'.
 * Only then does Node run the timer callback. Remove the limit and let
 * each callback call another nextTick 4ever, and Node stays stuck draining
 * that queue while the timer never runs.
 */