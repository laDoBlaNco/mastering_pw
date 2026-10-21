function inheritance() {
  // Base Class
  class Animal {
    constructor(name) {
      this.name = name;
    }

    makeSound() {
      return `${this.name} makes a sound.`;
    }
  }

  // Derived Class - method overriding
  class Dog extends Animal {
    makeSound() {
      return `${this.name} barks`;
    }
  }

  // create instance
  const myDog = new Dog("Fido");
  console.log(myDog.makeSound());

  // Super Keyword
  class Cat extends Animal {
    makeSound() {
      const baseSound = super.makeSound();
      return `${baseSound} Actually, it meows.`;
    }
  }

  // instance
  const myCat = new Cat("Whiskers");
  console.log(myCat.makeSound());

  /**
   * Multiple Inheritance and Mixins
   * JS does not support multiple inheritance directly.
   * Howerver, we can achieve similar functionality using Mixins.
   */
  let FlyMixin = {
    fly() {
      return `${this.name} is flying.`;
    },
  };

  // Adding mixin methods to other classes
  Object.assign(Dog.prototype, FlyMixin);

  // instanceof operator
  console.log(myDog instanceof Animal);
  console.log(myDog instanceof Dog);
  console.log(myDog instanceof Cat);

  
}

inheritance();
