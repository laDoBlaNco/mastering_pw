function inheritanceWithObjects() {
  /**
   * Prototypal Inheritance:
   * JS uses prototypes for inheritance.
   * Every object can have a reference to its prototype, an object from which it inherits
   * properties
   */
  const animal = {
    makeSound: function () {
      return "Some generic animal sound";
    },
  };

  const dog = Object.create(animal);
  dog.bark = function () {
    return "Woof!";
  };

  console.log(dog.makeSound());

  /**
   * Constructor Functions Inheritance
   * Inheritance can also be implemented using constructor functions. The 'Vehicle' constructor
   * serves as a base class for other vehicle types.
   */
  function Vehicle(type) {
    this.type = type;
  }

  Vehicle.prototype.move = function () {
    return "Moving!";
  };

  function Car(brand) {
    Vehicle.call(this, "Car"); // calling the parent constructor (like super())
    this.brand = brand;
  }

  // then we have to set up the prototype chain
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  Car.prototype.honk = function () {
    return "Beep!";
  };

  const myCar = new Car("Tesla");
  console.log(myCar.move()); // inherited from Vehicle

  /**
   * Overriding Methods
   * Inherited methods can be overridden in the derived object. Here,
   * the makeSound method of 'dog' is overridden
   */
  dog.makeSound = function () {
    return "Woof! Woof!";
  };
  console.log(dog.makeSound());

  /**
   * Using Instanceof
   * The 'instanceof' operator checks if an object is an instance of a particular class or constructor
   */
  console.log(myCar instanceof Car);
  console.log(myCar instanceof Vehicle);

  /**
   * Static Methods and Inheritance
   * Static methods are not associated with individual instances but with the constructor itself.
   * They are inherited by child constructors.
   */
  Vehicle.staticMethod = function(){
    return "I am a static method in vehicle";
  }
  Object.setPrototypeOf(Car, Vehicle) // ishtms missed this step in ES5
  console.log(Car.staticMethod());

  /**Object's own Methods
   * Using object.prototype.hasOwnProperty() to check if a property is owned by the object or
   * inherited from the prototype
   */
  for(const prop in dog){
    if(dog.hasOwnProperty(prop)){
      console.log(`${prop}: ${dog[prop]}`)
    }
  }
}

inheritanceWithObjects();
