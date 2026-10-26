/**
 *  Bytewiser
───────────
 Line Splitter
 Exercise 4 of 7


## Challenge

The argument given to you from process.argv[2] will be a path to a file.

Read this file and split it by newline characters ('\n'). You should log
one Buffer per line.

Bonus points if you never use .toString().

## Hints

Buffers have a .slice method that can be used to grab a sub-selection as a view (no memcpy).

Extra bonus points if you avoid using fs.readFileSync.

Read more about Buffers here:

  [http://](http://)

Or off-line on your local filesystem:

  C:\Users\white\AppData\Local\Author Software\nvm\installs\v22.14.0\node_modules\bytewiser/docs/node-api-docs.html#all_buffer

To get output for debugging when running bytewiser run program.js
you should use console.error instead of console.log.
 */

const fs = require('fs');
const chunks = []
const stream = fs.createReadStream(process.argv[2]);

const result = [];
let currentIdx = 0;

stream.on('data', (chunk) => chunks.push(chunk));
stream.on('end', () => {
  const fileBuf = Buffer.concat(chunks);
  while(true){
    const foundIdx = fileBuf.indexOf('\n'.charCodeAt(0),currentIdx);
    if(foundIdx === -1){
      result.push(fileBuf.subarray(currentIdx));
      break;
    }
    result.push(fileBuf.subarray(currentIdx,foundIdx));
    currentIdx = foundIdx + '\n'.length
  }
  for(const line of result){
    console.log(line);
  }
});
stream.on('error', (error) => console.error('Stream Error:',error.message));

