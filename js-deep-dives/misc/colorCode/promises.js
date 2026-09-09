// promises help us writer better async code and stay out of callback hell.
/**
 * so what is a promise. Since a function needs to return something immediately in order for the program to continue, it
 * will normally return undefined if its still waiting on data to come back, etc. The promise is an object that can
 * be returned immediatley and let's the program know, that something is coming, we just don't have it right now. We
 * attach our callbacks to the promise
 *
 * When  you first create a promise its in a 'pending' state. Then when you call 'resolve' or 'reject' that state changes
 * to resolved or rejected.
 *
 * so there are two parts to every promise, the maker and the receiver. What i have above is what the maker does, creating
 * and returning the pending promise while it works on whatever it needs to do.
 *
 * Then there is the receiver, or the thing that called our promise function and is gets the pending promose back. it needs
 * to then do something with that promise. So our receiver can use the methods of our pending promise and decide what it
 * wants to do with the data recieved if its resolved as well as what to do if there is an error, etc.
 */

function getWeather() {
  return new Promise((resolve, reject) => {
    reject("Sunny");
  });
}

const promise = getWeather();
console.log(promise); // this is pending at this point 'Promise {<pending>}
// Note when I added the resolve, this is no longer 'pending' and that data is passed o the .then() call
promise.then(
  (data) => {
    // our promise not only has state, but has its own methods (catch, finally, and then) We then put into 'then'
    // whatever we want to happen after our promise is successfully resolved.
    console.log(`First param: ${data}`);
  }, // then can actually take two args 🤔, that second arg is what happens if we get a reject. So we can attached a
  // function (callback) to that reject result as well.
  (data) => {
    console.log(`Second param ${data}`);
  },
);
// SO THIS IS ALREADY WAY UGLIER THAN CALLBACK HELL SO WHAT'S UP. Well don't actually work with promises this way. Normally
// we do the following as we can create our callbacks separately and don't need to even have a variable promise since we
// can simply connect then to our maker function

// The right way:
function getWeather2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hailstorm");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("🌞");
          break;
        case "Cloudy":
          resolve("🌥️");
          break;
        case "Rainy":
          resolve("⛈️");
          break;
        default:
          reject("NO ICON FOUND");
      }
    }, 100);
  });
}

// separate callbacks for resolve vs reject data:
function onResolve(data) {
  console.log(`Success: ${data}`);
}

function onReject(error) {
  console.log(`Error: ${error}`);
}

// the actual call to getWeather2()
getWeather2().then(getWeatherIcon).then(onResolve).catch(onReject);

// The beauty of promise chaining is that I don't have to pass in the results to each function. If they are chained then
// the result of one promise 'resolve(data) or reject(data) get's passed to the next function automatically.
// we can chain as many functions as we want and the errors bubble as well. for example if I put somethng that I don't
// have in my switch, then the default is my 'reject' message

// This gives us the readability that we don't get with callback hell or the pyramid of doom.

// Example 2:
function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("404");
    }, 2000);
  });
}
function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🥸🥸");
    }, 2000);
  });
}

function onSuccess(data) {
  console.log(data);
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`);
}

function inTheEnd() { // this will always run in the end as a clean up
  console.log("FINALLY WE BE DONE!");
}

fun1().then(fun2).then(onSuccess).catch(onError).finally(inTheEnd);


