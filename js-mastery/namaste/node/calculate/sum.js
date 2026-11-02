export function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
export const x = 'hello world';

// module code is protected by default and must be 'exported' explicitly
// modules protect from leaking by default
/*
export {
  calculateSum,
  x,
}
*/