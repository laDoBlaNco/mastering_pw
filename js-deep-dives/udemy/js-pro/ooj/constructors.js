// classes are blueprints of functionality
class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHi() {
    return "HELLO FROM A TRIANGLE";
  }
}

// instantiation
let myTri = new Triangle();
myTri.a = 3;
myTri.b = 4;
console.log(myTri.getArea());
console.log(myTri.getHypotenuse());

let firstTri = new Triangle();
console.log(firstTri.getArea());
console.log(firstTri.getHypotenuse());
firstTri.a = 3;
firstTri.b = 4;
console.log(firstTri.getArea());
console.log(firstTri.getHypotenuse());

let secondTri = new Triangle();
secondTri.a = 5;
secondTri.b = 12;
console.log(secondTri.getHypotenuse());

console.log(firstTri, secondTri);

// triangle is still an object
console.log(typeof myTri);

// js knows its an instance of Triangle
console.log(myTri instanceof Triangle);

console.log(myTri.sayHi());
console.log(firstTri.sayHi());
