// classes  can be defined in 2 ways

// declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable 🤯
const Rectangle2 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}; // note the ; for the expression

// classes are not hoisted, they have the same tdz as let or const.
// we can also have expressions; but classes with their own name
// not sure why
const Rectangle3 = class Rectangle4 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Constructors and methods
// The constructor mehod is a special method for creating and initializing an object created with a class. There can only
// one special method with the name 'constructor' in a class. We can use 'super' to call a constructor of a super class

// Methods are defined on  the prototype of each class instance and are shared by all instances. Methods can be plain
// functions, async functions, generator functions, or async generator functions
class Rectangle5 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // getter
  get area() {
    return this.calcArea();
  }

  // method
  calcArea() {
    return this.height * this.width;
  }

  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle5(10, 10);

console.log(square.area);
console.log([...square.getSides()]);

// Static methods and fields
// properties defined on the class itself
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1.displayName);
console.log(p1.distance);
console.log(Point.displayName);
console.log(Point.distance(p1, p2));

// Field declarations
// similar to object properties so they don't need 'const' or 'let'. and we can make them private or public (default)
// they can also be declared with or without a value
// using private elements
class Rectangle6 {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}

// referencing private fields from outside of a class is an error as they can only be read or written to in the class body


// Inheritance

