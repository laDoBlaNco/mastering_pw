/*

psuedocode for the event-loop.
The event loop lives in libuv and is written in C and it literally
just continues to run node's 'processEvents()' (not the real name, just
the concept), until the loop condition decides that its time to
exit:

while(!shouldExit){
  processEvents(); // <== so what happens here
}

Phases of the Node Event Loop:

Callback queues: (FIFO)
  1. when async operations completion their callbacks are placed in a
    'callback queue', keeping track of what callbacks are ready to be
    executed. - This queue in the context of node event loop are also
    known as 'event queue' or 'message queue'.

    NOTE - The event loop then works with this "callback queue", but there
    ISN'T REALLY ANY ONE QUEUE OF CALLBACKS. 

    If we look into the deep innards of the node event loop we'll see that
    there are actually several different queues and each one handles a 
    different phase of the event loop. So the 'callback queue' is actually
    just a concept of several queues, all of which that are tracking 
    callbacks ready to be executed. 

    Each phase of the event loop is responsible for different types of
    operations (Timers, I/O callbacks, setImmediate, Close callbacks)
    There are 4 main phases of the event loop. 

  2.Timers:
    There are 3 types in Node (setTimeout, setInterval, setImmediate)
    Of the 3, setImmediate is a special type of timer that sets the
    callback to be executed as soon as possible (immediately in theory)
    but it still has to fall into its phase. NOTE: ALL PHASES TAKE PLACE
    IN ONE LOOP OR TICK OF THE EVENT LOOP

  One Tick:  
  3.First phase goes through all Timer callbacks (setTimeout & setInterval)
  4.Second phase goes through all I/O Callbacks (in general this will be
    the majority of all callbacks in a real-life application). It includes
    all network and file operations, but in general anything that doesn't
    fit in the other phases goes here. THIS PHASE IS ALSO CALLED
    THE POLLING PHASE
  5.Third comes the 'check' or setImmediate callback queue which are from the setimmediate
    timer and are executed after the polling or i/O phase. So again event
    though its "immediate", its actually actually AFTER polling. So it actually
    runs after the normal Timer callbacks but IMMEDIATELY after any and all
    I/O callbacks and prior to another tick or loop of the event loop. (Its still
    considered immediate as it would run quicker than a setTimer(cb,0))
    in the same tick.
  6.Fourth and last comes the Close Callbacks phase which runs all callbacks that
    need to be run when you close a file or network connection. Also knownw as 
    'close handlers'

Main script/module → drain
┌─► timers  (callback → drain, callback → drain...)
│   pending callbacks
│   poll    (I/O callbacks, each → drain)
│   check   (setImmediate callbacks, each → drain)
│   close   (close callbacks, each → drain)
└── loop again, if anything is still alive

Additional notes from Claude clarifications:
The main script isn’t part of an iteration. It runs once, before the 
loop starts. Each trip around the phases is one loop iteration. 
Avoid calling that a “tick.” Node’s naming is famously confusing here: 
process.nextTick doesn’t wait for the next iteration, it runs before 
the next callback. The Node docs themselves admit the name is backwards.

When does the loop stop? When nothing keeps it alive, rather than when 
the queues are empty. Queues are empty most of the time. A listening 
server or an open socket is an active handle, so the loop keeps 
iterating and parks in the poll phase waiting for I/O. With no pending 
timers, handles or requests left, Node exits. That’s why a script 
with only sync code exits instantly, and a script with 
http.createServer().listen() runs forever.

Can new script/module code enter the stack later? Yes, but always inside an existing task, never as a new “first task”:

require() inside a callback: the required file’s top-level code runs 
synchronously, nested on top of the current callback’s frames. It runs 
only the first time, because modules are cached.
Dynamic import(): loads asynchronously. The new module’s top-level 
code is evaluated later, and your .then/await continuation runs as a 
microtask after that.
eval / vm.runInContext: run inline within the current task.
Preloads (--require, --import): run before your main module, still
 before the loop starts.

The real exceptions are worker threads and child processes. Each one 
starts its own script as its own first task, with its own stack and its own event loop (a separate process for child processes). That’s the Playwright tie-in from before: each test worker is a separate process with its own loop, which is why workers never share memory.

So per event loop, the main module is the only “first task.” 
Everything after it is a callback pulled from a phase queue, and 
other code only ever enters by running inside one of those tasks.

The two internal phases are pending callbacks and idle/prepare. 
I left idle/prepare off the diagram on purpose: none of your 
JavaScript ever runs there, so there’s nothing to drain.

The full six, with what reaches your code:

Phase	            Your callbacks run here?
------------------------------------------------
timers	          Yes: setTimeout, setInterval
pending cbs     	Yes, occasionally
idle, prepare	    No, libuv/Node bookkeeping only
poll	            Yes: most I/O callbacks
check	            Yes: setImmediate
close callbacks	  Yes: 'close' handlers

Pending callbacks holds I/O callbacks that libuv deferred from 
the previous iteration instead of running them where they happened. 
The classic example is certain TCP errors. On some systems, a 
connection refusal (ECONNREFUSED) gets reported here rather 
than in poll. You rarely target this phase directly, but your 
error callbacks can land in it, so it follows the same 
“callback → drain” rule.

Idle/prepare is where libuv and Node do internal housekeeping. 
“Prepare” runs right before poll, letting Node get ready before 
the loop potentially blocks waiting for I/O. No public API
schedules your code there.

So the four-phase teaching model keeps the phases where your 
callbacks normally run. My diagram added pending callbacks because 
your code can run there, and left out idle/prepare because it 
never does.
*/
