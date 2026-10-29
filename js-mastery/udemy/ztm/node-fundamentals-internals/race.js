// synchronouse code
console.log('🐇 finishes!')
console.log('🐢 finishes!')

console.log('--------------------')

// asynchronous code with callbacks
setTimeout(() => {
  console.log('🐇 finishes!'); // a callback function
}, 1000);
console.log('🐢 finishes!')
