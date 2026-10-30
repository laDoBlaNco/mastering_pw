// The job queue is in other words the micro-task queue.
// The Callback queue or Task Queue was first.
// When Promises were created by ECMAScript they needed another
// queue and thus the higher priority micro-task or job queue
// was born.

// Callback queue - Macro-Task Queue
setTimeout(() => console.log("1", "is the loneliest number"), 0);
setTimeout(() => console.log("2", "can be as bad as one"), 10);

// Job Queue - Micro-Task Queue
Promise.resolve("hi").then((data) => console.log("2", data));

// Synchronous code
console.log("3", "is a crowd");
