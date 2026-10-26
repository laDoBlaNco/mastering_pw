/**
 *  Bytewiser
───────────
 Typed Arrays
 Exercise 6 of 7

Typed Arrays offer another way to work with binary data. They were first added to JS
in 2010 and have now been standardized across most browsers thanks to the WebGL
specification for 3D programming in the browser. Typed Arrays don't have as much built-in
functionality as Buffers in node, but they have the unique advantage of working in browsers.

There are various flavors of Typed Arrays. Uint8Array is most similar to Buffer. The
“U” in “Uint” means “unsigned,” which is equivalent to saying “positive integers only.”
Int8Array, on the other hand, can store positive and negative values.

## Challenge

For this challenge, read the first buffer from process.stdin, copy all bytes into a
Uint8Array and then log out a JSON stringified representation of the typed array.

 */

const result = [];

process.stdin.on('data', (chunk) => result.push(chunk));
process.stdin.on('end', () => {
  const inputBuf = Buffer.concat(result);
  console.log(JSON.stringify(Uint8Array.from(inputBuf)));
})
process.stdin.on('error', (error) => console.error('Stream Error: ', error.message));
