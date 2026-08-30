/**
 * theSeniorDev -YouTube channel - 9 JavaScript Concepts That Got Me to Senior
 *
 * 7. Promises
 *
 * It all starts with callbacks which were huge in the javascript (especially node) world. Before promises the only way
 * to react to something was to give it a piece of code and trust it to run it at the right time later on.
 *
 * So in the example below we attach a callback to or network call in fetch, and when the network returns the result,
 * then our callback is sent to the call stack at SOME POINT in the future not within our control. There we multiple
 * problems with this: everything was nested and when you get to 3+ nested callbacks its very hard to detangle and debug.
 * "callback hell". There is also the problem of control inversion which is basically the fact that I have to give
 * control over to another function in a function in a function and expect it to run things correctly.
 *
 * NOTE: The default callback pattern inputs are 'callback(error,data)' as can be seen in the mock-up run below.
 *
 * Promises were created for this problem. With promises, our async function or the new 'fetch' below RETURNS a promise
 * rather than looking for us to pass it a callback. We still use callbacks but we attach callbacks to that promise. The
 * promise returned is an object and we attach things to it.
 *
 * A promise object is initiated with a status 'pending', and depending on what happens that status would change to
 * 'fulfilled' which would cause whatever callback we have attached to it with '.then()' to be executed (pushed to micro-task)
 * as we've seen in the Event Loop, or it fails with a status of rejected and any error (instead of data) get's pushed
 * through the '.catch()' keyword.
 *
 * "Promise: A special object with an internal state that we can attach callbacks to. A promise stars with an internal
 * state of "pending" and can either be "fulfilled" or "rejected". Both the resolution or rejection of a promise will
 * push its repsective callbacks to the Micro-task queue"
 *
 * So with that we go from "callback hell" to "promise chaining" which is a lot cleaner code and a lot easier to debug.
 * As we see in the last example mock up of 'fetchWithPromise' below
 *
 * THIS IS EXCELLENT AND THE FIRST TIME I'M REALLY UNDERSTANDING ASYNC JS CODE, BUT AFTER PROMISES CAME SOMETHING
 * ELSE TO MAKE JS ASYNC CODE EVEN MORE ELEGANT - "ASYNC AWAIT"
 */

// fetch from before, not returning a promise but requiring us to pass it a callback as an argument
function fetch(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = () => {
    if (xhr.status === 200) {
      // success: pass null for error and the data
      callback(null, JSON.parse(xhr.responseText));
    } else {
      // Error: pass the error message
      callback(`Error: ${xhr.status}`);
    }
  };

  xhr.send();
}

// running fetch with callback pattern (err,data) => {}
fetch("https://theseniordev.com", (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log("Success: " + data);
});

// new fetch with promises.
// NOTE how it similar in that its still based on callbacks, but I control where the callbacks are connected and any
// errors (3 possible below) bubble up through 'reject()' which always get pushed to a connected '.catch()' in the
// promise chain after the '.then()' as we'll see

function fetchWithPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
      if (xhr.status === 200) {
        // success: Resolve the promise with the parsed data
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (error) {
          reject("Error parsing JSON");
        }
      } else {
        // error: reject the promise with the status error
        reject(`Error: ${xhr.status}`);
      }
    };

    // its good practice to handle network errors specifically
    xhr.onerror = () => {
      reject("Network Error");
    };

    xhr.send();
  });
}

// with the promise chain
fetchWithPromise("https://theseniordev.com/questions")
  .then((questions) => {
    const hardQ = questions.find((q) => q.difficulty === "hard");
    console.log(`1. Question: ${hardQ.title}`);

    // return another promise
    return fetchWithPromise(
      `https://theseniordev.com/questions/${hardQ.id}/algorithms`,
    );
  })
  .then((algos) => {
    const topAlgo = algos[0];
    console.log(`2. Algorithm: ${topAlgo.name}`);

    // return the next promise
    return fetchWithPromise(
      `https://theseniordev.com/algorithms/${topAlgo.slug}/complexity`,
    );
  })
  .then((details) => {
    console.log(`3. Complexity: ${details.time.worstCase}`);
  })
  .catch((err) => {
    // catches all errors that bubble up through chain, no matter where they popped
    console.error("Chain broke:", err.message);
  });
