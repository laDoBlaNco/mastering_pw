/**
 * Getters- 
 * Allow you to retrievec the value of an object's property, typically one that is set to a private field
 * Its a method, but it gets treated as, looks and feels like a property
 */
class Circle{
  constructor(radius){
    this._radius = radius;
    this._diameter = radius * 2;
  }
}

const c = new Circle(4);
console.log(c._radius);
console.log(c._diameter);

c._radius = 10;
console.log(c._radius);
console.log(c._diameter); // this remains 8

// using a getter
class Circle2{
  constructor(radius){
    this._radius = radius;
  }

  get diameter(){
    return this._radius * 2;
  }

  get radius(){
    return this._radius;
  }
}

const c2 = new Circle2(4);
console.log(c2.radius);
console.log(c2.diameter);

c2._radius = 10;
console.log(c2.radius);
console.log(c2.diameter); // this remains 8

// looks like a property but runs other logic behind the scenes. 
// the underscore was just a convention to tell other devs don't change it or request to people to treat it as private
// there's a better way now.
