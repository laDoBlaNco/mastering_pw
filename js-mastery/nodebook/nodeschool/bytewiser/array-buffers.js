/**
 * 
 Bytewiser
───────────
 Array Buffers
 Exercise 7 of 7

Array Buffers are the backend for Typed Arrays. Whereas Buffer in Node is both
the raw bytes as well as the encoding/view, Array Buffers are only raw bytes and you
have to create a Typed Array on top of an Array Buffer in order to access the data.

When you create a new Typed Array and don't give it an Array Buffer to be a view
on top of it will create it's own new Array Buffer instead.

## Challenge

For this challenge, take the integer from process.argv[2] and write it as the first
element in a single-element Uint32Array. Then create a Uint16Array from the Array
Buffer of the Uint32Array and log out to the console the JSON stringified version
of the Uint16Array.

Bonus: try to explain the relevance of the integer from process.argv[2], or explain
why the Uint16Array has the particular values that it does.
 */

const uint32Array = new Uint32Array(1); // you said it was single-element
// uint32Array is the typed array i.e., the view of an underlying array buffer
// the view can be manipulated unlike the array buffer
uint32Array[0] = Number(process.argv[2]);
// console.error(uint32Array); 
// console.error(uint32Array.buffer); // the underlying array buffer
console.log(JSON.stringify(new Uint16Array(uint32Array.buffer)));

/**
 * Precisely. The argument is passed specifically to expose endianness—how your CPU's hardware 
 * architecture actually stores multi-byte numbers in physical memory.

If computers were naturally Big-Endian (reading left-to-right, most significant byte first), 
passing a number like 42 (0x0000002A) would place the value 0x0000 into [0] and 0x002A into [1], 
yielding [0, 42].

Instead, on standard modern processors (x86-64, modern ARM), your machine is Little-Endian:

The least significant byte hits index 0 first.

Running that code yields [42, 0] instead.

By forcing you to inspect the split values across the shared buffer, the test proves that your 
JavaScript runtime isn't an abstract mathematical space—it is bound directly to the byte-ordering 
rules of your CPU's memory registers.

the exact essence of it—specifically with respect to significance.Big-Endian ("Human / 
Left-to-Right" order): The Big end comes first. The most significant byte is stored at the 
lowest memory address (the start/left), and the least significant byte is stored at the end. 
This matches how humans write numbers: in $1,234$, the thousands digit ($1$) comes first on the 
left.Little-Endian ("Machine / Right-to-Left" order): The Little end comes first. The least 
significant byte is placed at the lowest memory address (the start/left), and the most 
significant byte is pushed to the highest address (the end/right).
 */