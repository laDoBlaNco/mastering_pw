// As of ES2018 we have for..await..of to work on async generators
// or await calls more precisely an iterable of promises
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

const getData = async function(){
  try {
    const [users,posts,albums] = await Promise.all(urls.map(async(url) => {
      const response = await fetch(url);
      return response.json();
    }));
    console.log('users:',users);
    console.log('posts:',posts);
    console.log('albums:',albums);
  } catch(err){
    console.log('Ooooops',err);
  }
}

// getData();
const getData2 = async function(){
  const arrayOfPromises = urls.map(url => fetch(url));
  // console.log(arrayOfPromises);
  for await(const request of arrayOfPromises){
    const data = await request.json();
    console.log(data);
  }
}

getData2();
