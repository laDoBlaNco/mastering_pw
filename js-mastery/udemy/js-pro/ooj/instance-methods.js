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

  sayHi() {
    return `The triangle with side A of ${this.a} and side B
    of ${this.b} and with an area of ${this.getArea()} SAYS HI!`;
  }
}

const tri = new Triangle(3,4)
console.log(tri.sayHi())


