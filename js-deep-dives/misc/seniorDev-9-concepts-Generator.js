/**
 * theSeniorDev -YouTube channel - 9 JavaScript Concepts That Got Me to Senior
 *
 * 9. Generator Functions:
 *
 *  A rather new feature of the language and can be thought of as functions that have state. Functions that can be
 * invoked several times even if they already 'ran to completion'.Functions with internal state. Normal functions can
 * only be invoked once. They run, they return y ya. Generator funCtions PAUSE after the first execution and depending
 * on how they are implemented, can keep on going.
 *
 * Counter example:
 * So the '*' in the function keyword tells the compiler that this is a generator function. As can be seen, it works a
 * bit like a class constructor it seems. Running it with its arg actually creates the generator instance tht has its
 * own state. From the second console.log it looks like that natural state is {value and done:boolean}
 *
 * It creates an Iterator object internally. and that's all it does. It doesn't actually 'run' the function. That
 * happens when you call .next() on it. Prior to that and after that its created by paused.
 * The 'yield' call is basically the return & pause.
 */

function* createCounter(start = 0) {
  let count = start;
  while (true) {
    yield count;
    count++;
  }
}

const myCounter = createCounter(1);
console.log(myCounter.next().value);
console.log(myCounter.next());
console.log(myCounter.next().value);

// So underneath our async/await lays a generator function running until all its yields are complete then its marked
// 'done' and returns the result, which is the actual async function

const getData = async function (userId) {
  const response = await fetch(`/users/%{userId}`);
  const data = await response.json();
};

// generator polyfill
const getData2 = asyncPolyfill(function* (userId) {
  const response = yield fetch(`/users/${userId}`);
  const data = yield response.json();
});

// what's more or less happening under the hood in Js compiler
function asyncPolyfill(generatorFunc) {
  return function (...args) {
    const iterator = generatorFunc.apply(this, args);

    return new Promise((res, rej) => {
      function step(key, arg) {
        let result;
        try {
          result = iterator[key](arg);
        } catch (error) {
          return rej(error);
        }

        const { value, done } = result;

        if (done) {
          return res(value);
        } else {
          return Promise.res(value).then(
            (val) => step("next", val),
            (err) => step("throw", err),
          );
        }
      }
      step("next");
    });
  };
}
