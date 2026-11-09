/**
 * THE CHECK PHASE
 * 
 * setImmediate() callbacks run in the check phase, and NOTHING ELSE DOES.
 * if we call setImmediate() inside an I/O callback, it runs as soon as that
 * poll callback returns and Node has drained any high-priority queues the
 * callback created (good to note here that the HIGH-PRIORITY queues such
 * as promise reactions in micro-task queue are drained between each callback)
 * 

 * DEFERRING FOLLOW-UP WORK AFTER I/O
 * 
 * WARNING: setImmediate() is an in-process scheduling tool NOT a durable 
 * background job system. For work that must survive a crash or retry automatically
 * use a persistent queue, a database-backed job table, or an external worker
 * 
 * We use setImmediate() when we want an I/O callback to finish its main work
 * before follow-up code runs later in the check phase.
 */
const fs = require('node:fs');

fs.readFile(__filename,(error) => {
  if(error) throw error;
  console.log('I/O callback: primary work finished');
  setImmediate(() => console.log('check phase: follow-up work'));
  console.log('I/O callback: response can be sent now');
})

/**
 * The follow-up work is NOT guaranteed to run immediately in wall-clock
 * time, since other queued tasks may be ahead of it. What we do get is an
 * ordering guarantee. Scheduled from inside an I/O callback, a setImmediate()
 * ALWWAYS runs in the check phase before a zero-delay timer (setTimeout(...,0))
 * scheduled from that same callback.
 * 
 * As mentioned above we can use it to yield control during I/O-adjacent work
 * in the same process. DO NOT USE IT FOR HEAVY OR DURABLE BACKGROUND QUEUES
 */

