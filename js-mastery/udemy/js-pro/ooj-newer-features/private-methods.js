// we can do the same with our methods as we do with the fields. Same syntax
class MyClass{
  // no need to pre-declare like we do with fields
  #privateMethod(){
    console.log('PRIVATE METHOD CALLED!!!');
  }

  publicMethod(){
    this.#privateMethod();
  }
}

const myClass = new MyClass();

console.log(myClass); // no visible method
// myClass.privateMethod() // Error: not a function
// myClass.#privteMethod() // crashes
myClass.publicMethod();

