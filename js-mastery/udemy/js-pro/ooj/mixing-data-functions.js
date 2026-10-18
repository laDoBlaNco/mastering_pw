// area of right triangle
function getTriangleArea(a, b) {
  return (a * b) / 2;
}

// Hypotenuse of right triangle
function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

console.log(getTriangleArea(3, 4));
console.log(getTriangleHypotenuse(3, 4));

console.log(getTriangleArea(5, 12));
console.log(getTriangleHypotenuse(5, 12));

// as a pojo - data with functionality, but not very repeatable
// *  difficult ot maintain
// * if we have 100 trianbles, we'd have 1000 copies of these 
let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

console.log(myTri.a);
console.log(myTri.b);

console.log(myTri.getArea())
console.log(myTri.getHypotenuse());

myTri.a = 5
myTri.b = 12
console.log(myTri.a);
console.log(myTri.b);

console.log(myTri.getArea())
console.log(myTri.getHypotenuse());


