/**
 * These methods are use for manipulation for the 'this' context as well as borrowiwng
 * and reusing methods across objects
 */

function callApplyBind() {
  // the Call Method
  // invokes a function with a given 'this' and arguments provided individually
  function showwFullName(firstname, lastname) {
    console.log(`${this.title} ${firstname} ${lastname}`);
  }
  const person1 = { title: "Mr." };
  showwFullName.call(person1, "Kevin", "Whiteside");

  // The Apply Method
  // Almost identical to call(), but it takes its args as an array or array-like object
  // great for arbitary arguments
  const person2 = { title: "Dr." };
  const names = ["Jane", "Doe"];
  showwFullName.apply(person2, names);

  // The Bind Method
  // Returns a new function that, when called, has its 'this' keyword set to the provided
  // value.
  // It sets 'this' permanently for a function, regardless of how or where it is called
  // It takes args the same as call(), individually
  const person3 = { title: "Prof." };
  const showFullNameProf = showwFullName.bind(person3);
  showFullNameProf("Emily", "Blunt");

  /**
   * Using with Event Handlers
   * The bind() method is often used within event handlers to ensure the correct object is
   * bound to 'this'. This avoids unexpected behavior, especially when working with DOM
   * elements
   */
  /*
  const button = document.createElement('button');
  button.textContent = 'Click Me';
  const obj = {
    text: "Hello, world!",
    handleClick: function(){
      alert(this.text);
    },
  };
  button.addEventListener('click',obj.handleClick.bind(obj));
  document.body.appendChild(button);
  */

  /**
   * Nuance: Bind Returns a New Function
   * The bind() method returns a enw function every time it's called.
   * Therefore, the same binding of a function to an object will create different function
   * instances.
   */
  const bound1 = showwFullName.bind(person3);
  const bound2 = showwFullName.bind(person3);
  console.log(bound1 === bound2);

  /**
   * Bonus: 'call' and 'apply' Can Accept Additional Parameters
   * Both 'call' and 'apply' can accept an arbitrary amount of arguments. The first argument
   * is the object to whwich 'this' should reference and the remaining arguments are those
   * that should be passed to the function being called/applied
   */
  function multiply(a, b) {
    return a * b * this.factor;
  }
  const calculator = { factor: 10 };
  console.log(multiply.call(calculator, 5, 2));
  console.log(multiply.apply(calculator, [5, 2]));
}

callApplyBind();
