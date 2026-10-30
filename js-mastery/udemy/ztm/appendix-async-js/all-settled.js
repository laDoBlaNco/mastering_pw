// Promise.all was given to us in ES6, but now in ES2020 we got
// Promise.allSettled to account for when not ALL promises resolve.

const promiseOne = new Promise((res,rej) => setTimeout(res,3000));
const promiseTwo = new Promise((res,rej)=>setTimeout(rej,3000));

Promise.allSettled([promiseOne, promiseTwo]).then(console.log);