/**
 * Why is synchronous code not always good enough, because even though it doesn't take very long or is very noticeable
 * for quick light items, for longer thngs we would have to noticebly wait for things to happen and freeze
 * out progress. when part of our code depends on a slower part of our code then things don't happen in the order expected
 * This is why we need async code
 */
let pizza;
function orderPizza() {
  console.log("Order pizza");
  setTimeout(() => {
    pizza = `🍕`;
    console.log(`${pizza} is ready`);
  }, 2000);
  console.log("Pizza was ordered");
}
orderPizza();
console.log("Call my friend");
console.log(`Eat ${pizza}`); // this results in 'undefined' since setTimeout is an async function, so console.log doesn't
// wait for it.
console.log();
// The older  js way of doing this is with callbacks. Actually its still the way its done, but with promises and async/await
// we just don't have to deal with it anymore.
function orderPizza2(callback) {
  setTimeout(() => {
    const pizza = "🍕";
    callback(pizza);
  }, 2000);
}

// this is our callback function, not the realtionship with orderPizza2. Its called by the orderpizza2 function when ready.
function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`);
}

orderPizza2(pizzaReady);
console.log('Call a Friend');

// The problem with callbacks is when you have quite af few items and it gets tough to start to track all of that. 