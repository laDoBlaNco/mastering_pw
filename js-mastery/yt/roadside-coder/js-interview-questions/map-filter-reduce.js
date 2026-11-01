const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => num * 3);
console.log(multiplyThree);

const moreThantwo = nums.filter((num, i, arr) => num > 2);
console.log(moreThantwo);

const sum = nums.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(sum);

// Polyfill for map:
Array.prototype.myMap = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};
const myMultiplyThree = nums.myMap((num, i, arr) => num * 3);
console.log(myMultiplyThree);

// polyfill for filter:
Array.prototype.myFilter = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
const myMoreThanTwo = nums.myFilter((num, i, arr) => num > 2);
console.log(myMoreThanTwo);

// polyfill for reduce
Array.prototype.myReduce = function (cb, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const mySum = nums.myReduce((acc,curr,i,arr) => acc + curr,0);
console.log(mySum);

// map vs forEach
const arr = [2,5,3,4,7];
const mapResults = arr.map((ar) => ar + 2)
const forEachResult = arr.forEach((ar) => ar + 2);
console.log(mapResults);
console.log(forEachResult);// nothing returned
// based on this we can chain on map but not forEach

// Output questions
let students = [
  {name:'Plyush', rollNumber: 31,marks:80},
  {name:'Jenny', rollNumber: 15,marks:69},
  {name:'Kaushai', rollNumber: 16,marks:35},
  {name:'Dilpreet', rollNumber: 7,marks:55},
]

// Return only name of students capitalized
const Q1 = students.map((student,i,arr) => student.name.toUpperCase());
console.log(Q1);



