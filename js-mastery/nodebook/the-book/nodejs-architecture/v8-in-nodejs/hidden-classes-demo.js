// run with node --allow-natives-syntax

const obj1 = {};
const obj2 = {};
console.log(%HaveSameMap(obj1,obj2));

obj1.x = 1;
console.log(%HaveSameMap(obj1,obj2));

obj2.x = 5;
console.log(%HaveSameMap(obj1,obj2));
