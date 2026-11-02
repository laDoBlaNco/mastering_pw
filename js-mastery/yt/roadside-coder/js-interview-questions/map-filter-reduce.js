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

const mySum = nums.myReduce((acc, curr, i, arr) => acc + curr, 0);
console.log(mySum);

// map vs forEach
const arr = [2, 5, 3, 4, 7];
const mapResults = arr.map((ar) => ar + 2);
const forEachResult = arr.forEach((ar) => ar + 2);
console.log(mapResults);
console.log(forEachResult); // nothing returned
// based on this we can chain on map but not forEach

// Output questions
let students = [
  { name: "Plyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushai", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Return only name of students capitalized
const Q1 = students.map((student, i, arr) => student.name.toUpperCase());
console.log("Q1:", Q1);

// Return only details of those who scored more than 60
const Q2 = students.filter((student, i, arr) => student.marks > 60);
console.log("Q2:", Q2);

// More than 60 and rollNumber greater than 15 - 2 ways
const Q3a = students.filter(
  (student, i, arr) => student.marks > 60 && student.rollNumber > 15,
);
const Q3b = students
  .filter((student, i, arr) => student.marks > 60)
  .filter((student) => student.rollNumber > 15);
console.log("Q3a:", Q3a);
console.log("Q3b:", Q3b);

// Sum of marks of all students
const Q4 = students.reduce((acc, curr, i, arr) => acc + curr.marks, 0);
console.log("Q4:", Q4);

// Names of students that scoring more than 60. - 3 ways
const Q5a = students
  .filter((student) => student.marks > 60)
  .map((student) => student.name);
const Q5b = students.reduce((acc, curr, i, arr) => {
  if (curr.marks > 60) acc.push(curr.name);
  return acc;
}, []);
const Q5c = students.reduce(
  (acc, curr, i, arr) => (curr.marks > 60 ? [...acc, curr.name] : acc),
  [],
);
console.log("Q5a:", Q5a);
console.log("Q5b:", Q5b);
console.log("Q5c:", Q5c);

// Total marks for students with marks greater than 60 only after 20
// marks have been added to those who scored less than 60
const Q6 = students
  .map((student) => {
    if (student.marks < 60) student.marks += 20;
    return student;
  })
  .reduce((acc, curr) => (curr.marks > 60 ? acc + curr.marks : acc), 0);
console.log("Q6:", Q6);
