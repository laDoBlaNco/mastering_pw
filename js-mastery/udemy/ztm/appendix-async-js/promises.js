/**
 * Understanding callbacks first:
 * el.addEventListener('click',submitForm); - submitForm is the cb
 *
 * This takes us to callback hell (callback pyramid of doom)
 * movePlayer(100, 'Left', () => {
 *  movePlayer(400, 'Left', () => {
 *    movePlayer(10, 'Right', () => {
 *      movePlayer(330, 'Left', () => {
 *      })
 *    })
 *  })
 * })
 *
 * Now the above with a Promise;
 *
 * movePlayer(100, 'Left')
 *  .then(() => movePlayer(400, 'Left'))
 *  .then(() => movePlayer(10, 'Right'))
 *  .then(() => movePlayer(330, 'Left'));
 */

/*
Or a more realistic example showing the repetition of code that happens

grabTweets('twitter/andreineogoie', (error, andreiTweets) => {
  if(error) throw Error;
  displayTweets(andreiTweets);

  grabTweets('twitter/elonmusk', (error, elonTweets) => {
    if(error) throw Error;
    displayTweets(elonTweets);
    
    grabTweets('twitter/vitalikbuterin', (error, vitalikTweets) => {
      if(error) throw Error;
      displayTweets(vitalikTweets);  
    })
  })
})

Also with a Promise and error handling:

grabTweets('twitter/andreineogoie')
  .then((andreiTweets) => displayTweets(andreiTweets))
  .then(() => grabTweets('twitter/elonmust'))
  .then((elonTweets) => displayTweets(elonTweets))
  .then(() => grabTweets('twitter/vitalikbuterin'))
  .then((vitalicTweets) => displayTweets(vitalikTweets))
  .catch((error) throw Error);

Little more verbose due to the example calling the function over and over
rather than a series or related functions. A bit convoluted example

so how do we do this?
*/
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hiii");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Pookie");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Is it me you are looking for?");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) =>
  console.log(values),
);

console.log(promise);
promise
  .then((result) => result + "!!!")
  .then((result2) => result2 + "?")
  .catch(() => console.log("errorrr"))
  .then((result3) => result3 + "!")
  .then((result4) => console.log(result4));

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholde.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))).then(
  (results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  }).catch(() => console.log('Found an error'))
