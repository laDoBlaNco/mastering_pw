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
    return `Area is ${this.getArea()}`;
  }
}

// subclass
class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    // super calls parent's constructor MUST BE CALLED OR ERROR
    super(a, b);
    this.color = color;
  }

  describe() {
    return `Area is ${this.getArea}. Color is ${this.color}!`;
  }
}

console.log(new ColorTriangle(3,4,'red'));

class ColorMoodTriangle extends ColorTriangle{
  constructor(a,b,color,mood){
    // here super refers to ColorTriangle which then calls Triangle
    // constructor
    super(a,b,color);
    this.mood = mood;
  }
}

console.log(new ColorMoodTriangle(3,5,'green','sad'));

const tri = new ColorMoodTriangle(3,5,'green','sad');
console.log(tri.mood);
console.log(tri.getArea());
console.log(tri.getHypotenuse());

