/**
 * THE POLL PHASES
 * 
 * NOTE: Polling means asking the operating system which I/O handles, like
 * sockets or file descriptors, are ready for work.
 * 
 * The poll phase does the most work. It collects new I/O events and runs
 * most of our I/O callbacks. It does two things:
 * 
 * 1. It works out how long it can block while waiting for I/O. It checks
 * for pending setImmediate() callbacks, active handles, and upcoming timer
 * thresholds, then cals the platform's native poll provider, like 
 * epoll_wait on linux. That blocking happens inside the operating system,
 * NOT in a javascript busy loop that wastes CPU.
 * 
 * 2. Once the wait ends, because I/O data arrived, a timer threshold expired,
 * or the engine hit a safety limit, Node then runs the relevant callbacks. 
 * This is where many of our socket callbacks and worker-pool file-system
 * completions run.
 * 
 * If the poll queue has items, the loop runs them until the queue drains or
 * a safety limit stops it. Once the queue is empty, two rules decides what
 * happens next:
 * 
 * 1. If any setImmediate() callbacks are scheduled, the loop ends the poll
 *    phase and goes straight to the check phase
 * 2. If none are waiting, the loop pauses for new I/O, but it wiwll NOT wait
 *    past the next due timer threshold or past libuv's internal limits.
 * 
 * One last piece. Shutting the process down isnot the job of some callback
 * at the end of a poll phase. The moment no referenced handles, active
 * requests, timers, immediates, or workers remain, Node sees it has no
 * event-loop work left and exists cleanly.
 * 
 */