// 3 ways we can handle multiple promises
// Parallel - settle in parallel all promises
// sequencial - settle in order (sequence)
// race - return the first one that settles and throw the rest away

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done ${output1} ${output2} ${output3}`;
}

// NOTE: 👀👀👀 I just learned that I don't need to do the verbose
// (data) => console.log(data). Just passing the callback to .then() is
// the same thing if its just one callback and multiple things
// parallel().then(console.log)

async function race(){
  const promises = [a(),b(),c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}
// race().then(console.log);

async function sequence(){
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done: ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);