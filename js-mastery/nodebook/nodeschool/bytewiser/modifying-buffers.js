/**
 * 
 Bytewiser
───────────
 Modifying Buffers
 Exercise 3 of 7

Buffers are similar to Arrays in that you can get and set values at particular offsets.

## Challenge

Write a program that takes the first buffer written to process.stdin,
updates all instances of . with ! and then logs out the updated buffer object.

Bonus points if you never call .toString() on your buffer!

## Hints

Buffers have a .write method that can be used to a character to a specific offset.

The integer value of the ascii character . is 46.
*/
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if(data !== null) {
    const result = data.map((ch) => ch === 46 ? 33 : ch);
    console.log(result);
  }
});
