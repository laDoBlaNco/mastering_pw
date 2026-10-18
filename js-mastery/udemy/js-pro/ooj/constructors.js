// classes are blueprints of functionality
class Triangle {
  // validate data and set properties
  // constructor ALWAYS returns 'undefined'
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);
    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid a: ${b}`);
    this.a = a;
    this.b = b;
  }

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

let myTri2 = new Triangle(5, 12);
let myTri3 = new Triangle(2, 4);
console.log(myTri2, myTri3);

console.log(new Triangle(1,2));
// console.log(new Triangle(1,'as'))
console.log(new Triangle(1,[]))

