function objects() {
  /**
   * Object Literals: are the simplest way to create an object. Objects can have properties
   * and methods (functions associated with the object as a property)
   */
  const person = {
    name: "Ladoblanco",
    age: 49,
    greet() {
      return `Hello, ${this.name}`;
    },
  };
  console.log(person.greet());

  /**
   * Accessing Properties: Properties can be accessed using dot or bracket notation.
   * Dot notation is more readable and is generally used when the property name is known
   * ahead of time
   */
  console.log(person.name);
  console.log(person["age"]); // in bracket must be a string or varible

  /**
   * Adding & Updating Properties
   * New Properties can be added and existing properties can be updated. This showcases the
   * dynamic nature of JS objects
   */
  person.email = "ladoblanco@example.com";
  person["age"] = 29;
  console.log(person);

  /**
   * Deleting Properties: The 'delete' keyword is used to remove properties from an object. Note
   * that this operation is not reversible
   */
  delete person.email;
  console.log(person);

  /**
   * Object Constructor: This is another wway to create an object outside of the object literal.
   * While less commonly used then object literals, it is equally powerful
   */
  const car = new Object();
  car.brand = "Tesla";
  car.model = "Model 5";
  console.log(car);

  /**
   * Object Methods: Functions that are stored as object properties
   */
  car.describe = function () {
    return `${this.brand} ${this.model}`;
  };
  console.log(car.describe());

  /**
   * Object Destructuring: Allowws us to extract properties into variables, much like
   * array destructuring. This feature was intro'd in ES6 and is often used for better
   * readability
   */
  const { name, age } = person; // variable names must match property name
  console.log(name, age);

  /**
   * Looping over Properties: The 'for...in' loop was created specifically for this. Enumerating
   * and iterating over object keys. It is good practice to use 'hasOwnProperty()' to filter
   * out properties from the prototype chain, since 'for...in' suffers from enumerating EVERYTHING
   */
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }

  /**
   * Checking Property Existence: There are multiple ways to check for property existence.
   * 'in' checks for own and inherited properties, '.hasOwnProperty()' checks for own properties
   */
  console.log('name' in person);
  console.log(person.hasOwnProperty('email'));

  /**
   * Object Spread Operator: The spread operator (...) can clone or merge objects. Its a quick
   * and easy way to perform these operations, but its only a shallow copy or clone
   */
  const clonePerson = {...person};
  console.log(clonePerson);

  /**
   * Object.assign(): This method can also be used to clone or merge objects. It provides
   * more control and its generally used for more complex operations. 
   * NOTE: It is also a shalloww copy though.
   */
  const anotherClone = Object.assign({},person);
  console.log(anotherClone);

  /**
   * Object.freeze() and Object.seal(): These methods control object mutabiltiy.
   * Object.freeze() makes an object immutable.
   * Object.seal() prevents new properties from being added and existing ones from being deleted,
   * but allowws value modification
   */
  Object.freeze(person);
  person.age = 50;
  console.log(person.age);// doesn't work since its frozen
  
  
  
  
  
}

objects();
