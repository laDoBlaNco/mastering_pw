/**
 * methods:
 * Functiions placed in a class are methods (formally, instance methods)
 * They have access to properties of object with this
 * They take arguments/return data like any other function
 */

class Triangle {
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

  describe() {
    return `I am a triangle with area of ${this.getArea()}`;
  }
}

// this works, but its not DRY
/*
class ShyTriangle {
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

  describe() {
    return `(runs and hides)`;
  }
}
*/

// enter 'inheritance'
class ShyTriangle extends Triangle {
  // don't repeat if not different
  describe() {
    return "(runs and hides)";
  }
}

const regTri = new Triangle(3, 4);
const shyTri = new ShyTriangle(3, 4);

console.log(regTri.describe());

console.log(shyTri);
console.log(shyTri.describe());
