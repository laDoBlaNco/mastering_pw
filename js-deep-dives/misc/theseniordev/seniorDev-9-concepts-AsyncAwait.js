/**
 * theSeniorDev -YouTube channel - 9 JavaScript Concepts That Got Me to Senior
 *
 * 8. Async Await:
 *
 * An easier way to create and use promises without explicitly creating them. Also called polyfill or 'syntax sugar'.
 * NOTE: Its still all callbacks underneath, but rather than nested, they are chained with promises and bubbling
 * up errors. And now with some more sugar on top.
 *
 * Underneath Async/Await it'll be changed to promises. So the below is the same:
 *
 * The sugar is simple: instead of the chain, you start your function with 'async' and then put 'await' before every line
 * that returns an actual promise. Under the head we are working with the same promise object with its statuses of 'pending'
 * 'fulfilled', and 'rejected'. And a Generator Function which basically starts and pauses for each await.
 *
 * And Generator Functions are our last concept
 */

// Promise chain
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    render(data); // display data
  })
  .catch((err) => {
    console.error(err);
  });

// Asyncawait
async function getData() {
  const response = await fetch(url); // since 'fetch' returns the promise it gets the await
  const data = render(data); // no promise returned here so no 'await' needed
}

// a generator example:
function* counter() {
  // the '*' after function tells us its a generator
  let index = 0;
  while (true) {
    yield index++;
  }
}
