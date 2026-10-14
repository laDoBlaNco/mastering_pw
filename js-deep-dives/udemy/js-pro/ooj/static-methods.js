/**
 * Static Methods:
 * Js gives us static methods, where the method is called on a class, not an object (instance) - therefore it can't have
 * access to individual object attributes
 */

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    console.log(`This is: ${this}`);
    
    return "MEOW MEOW MEOW!!!";
  }

  static species = "felis catus";
}

const blue = new Cat('blue','scottish fold');
console.log(blue);
// console.log(blue.meow()); // blue.meow is not a function
console.log(Cat.meow());

/**
 * Almost every other OO language more preoperly calls this a 'class method' not a static method - since it doesn't have
 * access to this class itself (that's what the 'this' is in JS 'static method')
 * 
 * More consistent OO languages, like C++/Java/Python, also have true static methods, where they don't have access to the 
 * class itself.
 */


