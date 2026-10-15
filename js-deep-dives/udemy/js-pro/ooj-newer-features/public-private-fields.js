/**
 * Class Fields - Public
 *
 * Private INSTANCE class fields (properties) provide a way to maintain encapsulation and not allow external access
 * As opposed to static class fields which are only on the class itself not on each instance
 */
class MyClass {
  //public
  publicField = "Public Field";

  // private
  #privateField = "Private Field";

  getPrivateField(){
    return this.#privateField
  }
}

const instance = new MyClass();
console.log(instance.publicField)
console.log(instance.getPrivateField());
// console.log(instance.#privateField); // Error Property '#privateField not accessible...

class Cat{
  static numOfCats = 0;
  name;
  breed;
  numLegs = 4;
  hasTail = true;
  // the benefit is that we can make the constructor simpler and cleaner and unless we need to make changes are add
  // included from arguments, there is no need to put into the constructor
  // Also having them all above I can see a list of all the properties at the top and then assign them in the constructor

  constructor(name){
    this.name = name;
    Cat.numOfCats += 1;
  }

  amputate(){
    this.numLegs -= 1;
  }
}

const blue = new Cat('blue');
console.log(blue);
console.log(Cat.numOfCats)
console.log(blue.hasTail) // public

// private class fields
class Circle{
  #radius;
  constructor(radius){
    this.#radius = radius;
  }

  get radius(){
    return this.#radius
  }
}

const c = new Circle(3);
console.log(c); // radius seen here
// console.log(c.#radius) // Error '#radius' not accessible...
console.log(c.radius);

