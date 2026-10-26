/**
 *  Bytewiser
───────────
 Buffer From String
 Exercise 1 of 7

In Node.js, Buffer is a global object that provides a way to work with different
kinds of binary data. Most APIs in Node core (e.g. http, net, fs) will give you
buffers, and will be able to do their job faster if you give them buffers.

## Challenge

Write a node program that prints a buffer object containing
the string "bytewiser" using console.log.
 */

const buf = new Buffer.alloc(9);
buf.write('bytewiser');
console.log(buf);

