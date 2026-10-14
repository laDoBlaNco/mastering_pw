// grouping functionality but never really needed to ever intantiante it
// like JS Math lib, or maybe an  API

class MyMath {
  static add(a, b) {
    return a + b;
  }
  static multipy(a, b) {
    return a * b;
  }
}

// or factory methods
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  meow() {
    return `${this.name} says meow!`;
  }

  static registerStray(){
    const names = ['Muffin','Biscuit','Sleepy','Dodo','Princes Butterface'];
    const name = choice(names)
    // note that I know a factory function as function that returns an {}, but this also returns an object, but an
    // instance of an object.
    return new Cat(name,'unknown');
  }
}

function choice(arr){
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx]
}

console.log(Cat.registerStray());
console.log(Cat.registerStray());
console.log(Cat.registerStray());

