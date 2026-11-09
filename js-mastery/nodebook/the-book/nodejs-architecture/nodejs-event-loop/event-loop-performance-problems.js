/**
 *  EVENT LOOP PERFORMANCE PROBLEMS
 *
 * Sl all this scheduling only works if our callbacks return quickly. When one callback
 * runs too long, it holds up everything behind it, no matter which phase or queue
 * those tasks come from.
 *
 * Some blockers are obvious, like synchronous APIs such as fs.readFileSync() or
 * heavy CPU-bound loops. The trickier ones are everyday JavaScript operations that
 * look harmless until they hit some large input.
 *
 * Large JSON work is the common example. JSON.parse() and JSON.stringify()
 * are synchronous. Their time scales with input size (O(n)), so a large payload
 * holds the event loop long enough to raise latency. For large JSON, we need
 * to enforce strick size limits or move to a streaming parser. I'll see some
 * of those in the chapter on streams.
 *
 * Complex regular expressions can be even worse, because an attacker can craft input
 * to exploit them. A badly built regex can trigger CATASTROPHIC BACKTRACKING, where the
 * regex engine retries an exploding number of paths and freezes the event
 * loop. At that point it is no longer a small performance hiccup but a denial-of-service
 * (DoS) risk. Wwe should avoid nested quantifiers, overlapping alternatives, and
 * backreferences in validation paths unless we have tested the worst cases.
 *
 * THE LIBUV WORKER POOL REVISTED:
 *
 * The libuv worker pool is global and shared across the whole application, with four
 * threads by default. Functions like fs.readFile() and crypto.pbkdf2() are async
 * on the JS side, but the native file-system or crypto work can still sit waiting
 * in that single shared native queue.
 *
 * Because the pool is shared, unrelated tasks block each other. Say our server uses
 * fs.readFile() to read a file from a slow network drive and crypto.pbkdf2() to verify
 * a password at the same time. Both compete for the same small set of background threads.
 * If five such requests arrive together, they fill the queue, and that hidden coupling shows
 * up as a spike in user latency.
 *
 * That is how a slow file-system task can drag down authentication latency, etc. Everything
 * in the libuv worker pool shares the same threads. Heavy file I/O, dns.lookup(),
 * crypto, and zlib compression all compete for them.
 *
 * If and when performance dips the first instinct is to raise UV_THREADPOOL_SIZE. We
 * shouldn't do that blindly. It could cause more problems. We must measure pool pressure
 * first. More threads can raise throughput, but they are NOT free, they raise memory
 * footprint and add CPU scheduling and context switching overhead.
 *
 * PROFILING AND DEBUGGING THE EVENT LOOP
 *
 * Knowing how wthe event loop orders tasks and works doesn't tell us whether its
 * healthy by itself. For that, we need to measure it.
 *
 * A quick local signal is a timer-based latency check. It only makes sense in a long-running
 * server, not a one-shot script, because it tracks how late an interval callback
 * arrives.
 */
let lastCheck = Date.now();

setInterval(() => {
  const now = Date.now();
  const delay = now - lastCheck - 1000;
  if (delay > 50) console.warn(`Event Loop Latency: ${delay}ms`);
  lastCheck = now;
}, 1000);

/**
 * When those warnings start to appear, our interval callback was pushed back.
 * Usually a long running callback, a garbage collection pause, or a heavy synchronous
 * operation is holding the main thread.
 * 
 * For continuous production monitoring, we can skip the manual timer and use Node's
 * built-in histogram tool
 */

const {monitorEventLoopDelay} = require('node:perf_hooks');
const h = monitorEventLoopDelay({resolution:10});
h.enable();

setInterval(()=>{
  console.log(`Event Loop Delay (ms): ${h.mean / 1_000_000}`);
  h.reset();
},5000);

/**
 * That histogram records nanoseconds, so we divide by 1_000_000 for milliseconds
 * To see how much time the loop spends working vs sitting idle, we can pair the
 * delay metrics with performance.eventLoopUtilization()
 * 
 * 
 */