/**
 * TRUE PARALLELISM WITH worker_threads:
 *
 * I'll cover worker_threads in more detail later. Here just looking
 * at when standard event-loop scheduling is no longer enough
 *
 * For heave, CPU-bound JS inside one process, we should use node:worker_threads
 * module. A worker thread is NOT the same as one of libuv's background worker-
 * pool threads. It is a separate thread with its own v8 ISOLATE, a private
 * instance of the engine with its own heap, and its own event loop.
 *
 * Because workers run in isolation, they do NOT share JS objects by references.
 * By default, data we send between them is cloned or trasferred. We CAN share
 * raw memory with a SharedArrayBuffer, or pass ArrayBuffer instances directly,
 * but that brings race conditions, as I noted with Claude earlier, and coordination
 * bugs unless we guard access with Atomics. For most work, plain message passing
 * is the safer default.
 *
 * NOTE: We'll see SharedArrayBuffer, ArrayBuffer and Atomiics in an upcoming
 * chapter - Views, Copies and Memory Ownership
 */

const {join} = require('node:path');
const {Worker} = require('node:worker_threads');

const worker = new Worker(join(__dirname,'cpu-worker.js'),{
  workerData: 50_000_000,
});

worker.once('message', (result)=>console.log('Worker result:',result));
worker.once('error',(error)=>console.error('Worker failed:',error));

/**
 * Since the loop runs inside the worker, the main thread's event loop stays
 * free to handle incoming request callbacks. One performance note. If our application
 * runs repeated CPU tasks, we should keep a persistent worker pool instead of 
 * spawning a new worker for every job, since startup isn't free.
 * 
 */