/**
 * GARBAGE COLLECTION AND LOOP LATENCY
 * 
 * V8's GC adds to event-loop latency as well. Much of the cleanup runs incrementally
 * or in the background, but we still hit STOP-THE-WORLD pauses where all
 * JS execution stops. Usually these pauses are small and go unnoticed. Under
 * heavy memory pressure they stack up and show as spikes in our tail latency, the
 * slowest end of our response-time distribution.
 * 
 * During a pause, no Js callback runs. From the outside, the process looks frozen,
 * the same as heavy synchronous CPU tasks on the main thread. To keep these
 * pauses small, we need to keep our allocation rate down and avoid holding large
 * amounts of memory in the heap that we don't need. 
 * 
 * So to sum it all up here at the end:
 * 
 * JavaScript runs until it finishes. Node drains process.nextTick() and
 * promise microtasks the moment a callback returns and the stack is clear.
 * libuv advances native work phase by phase. Zero-delay timers are minimum
 * thresholds only, they are never a guarantee of which code runs first.
 * When we need a specific order, we need to structure the execution ourselves
 * instead of guessing how the engine will schedule it.
 */