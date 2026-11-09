/**
 * PENDING CALLBACKS AND INTERNAL OPERATIONS
 * 
 * The loop also passes through a few internal phases that we rarely
 * touch and almost never or never run our JS code directly. the first
 * is PENDING CALLBACKS. It runs certain I/O callbacks that were deferred
 * from the previous iteration. A TCP ECONNREFUSEED connection error on
 * some Unix systems for example.
 * 
 * After that comes the IDLE and PREPARE phases. libuv uses them for internal
 * bookkeeping right before polling, and they are not exposed as public js
 * scheduling apis.
 * 
 * 🤔 - so the polling phase is really the "first" phase of the loop that we
 * directly interact with. since the first timers run is before the event loop
 * starts and then pending callbacks and idle,prepare are mainly internal. This 
 * also makes sense as to why its this polling phase that basically pauses if theres
 * nothing coming in or expected, rather than just running the loop infinitely.
 * 
 */