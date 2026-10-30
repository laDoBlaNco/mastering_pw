// async await is just sugar on top of Promise, but it makes
// it more readable. making it look Synchronous by PAUSING code execution

/*
function playerStart(){
  movePlayer(100, 'Left')
    .then(() => movePlayers(400, 'Left'))
    .then(() => movePlayers(10, 'Right'))
    .then(() => movePlayers(330, 'Left'))
}

Now with async/await

async function playerStart(){
  const first = await movePlayer(100, 'Left'); // this pauses here
  const second = await movePlayer(400, 'Left'); // this pauses here
  // now first and second have the results
  await movePlayer(10, 'Right'); // this pauses here
  await movePlayer(330, 'Left'); // this pauses here
}

*/

/*
// real example
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => console.log(users));


// the async await version:
async function getusers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}
getusers();
*/

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholde.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

async function getEverything(){
  try{
    const stuff = await Promise.all(urls.map((url) => {
      return fetch(url).then((res) => res.json());
    }))
    console.log('users:', stuff[0]);
    console.log('posts:', stuff[1]);
    console.log('albums:', stuff[2]);
  } catch { // all 
    console.log('Oops!!!');
  }
}
getEverything();