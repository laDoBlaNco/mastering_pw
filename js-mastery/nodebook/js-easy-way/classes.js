function classes() {
  /**
   * Class declarations:
   * A class serves as a blueprint for creating objects. It encapsulates data and
   * behavior for an object.
   */
  class Animal {
    constructor(name) {
      this.name = name;
    }
    makeSound() {
      return `${this.name} makes a sound.`;
    }
  }

  // create an instance
  const animal = new Animal("Dog");
  console.log(animal.makeSound());

  /**
   * Class inheritance
   * Classes can inherit properties and methods from other classes.
   * The 'extends' keyword is used for this purpose.
   */
  class Dog extends Animal {
    makeSound() {
      return `${this.name} barks.`;
    }
  }

  // create an instance of Dog
  const dog = new Dog("Buddy");
  console.log(dog.makeSound());

  /**
   * Access Modifiers
   * JavaScript classes don't have traditional access modifiers like private or public, but
   * we can use prefixes like # to denote and somewhat enforce private fields
   */
  class Car {
    #brand; // must be declared first (initialization is optional)
    constructor(brand) {
      this.#brand = brand;
    }

    // could use a getter here which would be better
    getBrand() {
      return this.#brand;
    }
  }

  const car = new Car("Tesla");
  console.log(car.getBrand());

  /**
   * Static Methods
   * Static methods are methods that belong ot the class, not an instance of the class
   */
  class MathUtility {
    static add(a, b) {
      return a + b;
    }
  }

  console.log(MathUtility.add(5, 3));

  /**
   * Getter and Setters (here they are!)
   * Getters and Setters are special methods that allow controlled access to class properties
   * and they can be used as if they were actual properties, but only as they are implemented
   * to they are a protection
   */
  class Circle {
    #radius;
    constructor(radius) {
      this.radius = radius;
    }

    get radius() {
      return this.#radius;
    }

    set radius(value) {
      if (value < 0) {
        console.log("Invalid radius");
        return;
      } else {
        this.#radius = value;
      }
    }
  }

  const circle = new Circle(5);
  console.log(circle.radius);

  circle.radius = 10;
  console.log(circle.radius);

  /**
   * Class Expressions
   * Classes can be defined using class expressions as well, much like function expressions
   */
  const Rectangle = class {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
  };

  const rectangle = new Rectangle(5,10);
  console.log(rectangle.area());
  
}

classes();
