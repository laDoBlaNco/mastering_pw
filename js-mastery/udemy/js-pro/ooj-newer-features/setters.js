/**
 * Setters:
 *
 * Allow us to set the value of an object's property. Similar to a getter its a method that feels and acts like a
 * property, but for assignment or setting that property
 *
 * It can help ensure that the radius, for example, of the circle is not set to a negative value.
 * Setters can be very useful for validation and to make the constructor shorter as well
 */
class Circle {
  constructor(radius, color) {
    this._radius = radius;
    this._color = color;
  }

  // setters
  set radius(value) {
    if (value < 0) throw new Error("Radius cannot be negative");
    this._radius = value;
  }
  set color(newColor) {
    const allowedColors = new Set(["red", "green", "blue"]);
    if (allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed");
    }
  }

  //getters
  get radius() {
    return this._radius;
  }
  get color() {
    return this._color;
  }
}

const c = new Circle(10,'red');
// c.radius = -3;// Error: Radius cannot be negative
c.radius = 23;
c.color ='green'
// c.color = 'pickles'
console.log(c);
console.log(c.radius);
