/**
 * Here we demonstrate various techniques of type conversion in JS
 * This includes both explicit and implicit type conversion, each of which is outlined below
 *
 */

function typeConversion() {
  /**
   * String to Number:
   * I can convert a string to a number using the unary '+' operator or the Number() constructor
   * Both methods return NaN (Not-a-Number) if the string can't be converted to a number.
   */
  let strToNum = +"42";
  let strToNumUsingFunc = Number("42");
  console.log(
    `String to Number using unary +: ${strToNum}, typeof: ${typeof strToNum}`,
  );
  console.log(
    `String to Number using Number(): ${strToNumUsingFunc}, typeof: ${typeof strToNumUsingFunc}`,
  );

  /**
   * Number to String:
   * Numbers can be converted to strings using the String() constructor or the .toString() method
   */
  let numToStr = String(42);
  let numToStrUsingMethod = (42).toString();
  console.log(
    `Number to String using String(): ${numToStr}, typeof: ${typeof numToStr}`,
  );
  console.log(
    `Number to String using .toString(): ${numToStrUsingMethod}, typeof: ${typeof numToStrUsingMethod}`,
  );

  /**
   * Boolean to Number:
   * Boolean values can be converted to numbers using the Number() constructor
   * Here, 'true' is converted to 1 and 'false' would be converted to 0
   */
  let boolToNum = Number(true);
  console.log(`Boolean to Number: ${boolToNum}, typeof: ${typeof boolToNum}`);

  /**
   * Number to Boolean:
   * Numbers can be converted to boolean values using the Boolean() constructor.
   * Here, any non-zero number wiwll be converted to 'true' and zero (0, -0, 0n) to 'false'
   */
  let numToBool = Boolean(0n);
  console.log(`Number to Boolean: ${numToBool}, typeof: ${typeof numToBool}`);

  /**
   * Implicit Convesion:
   * JS performs implicit type conversion in certain expressions.
   * For example, using + with a string and a number results in string concatentation
   */
  let implicit = "5" + 1; // num to string
  let implicit2 = "5" * 1; // string to num
  console.log(
    `Implicit Conversion (String + Number): ${implicit}, typeof: ${typeof implicit}`,
  );
  console.log(
    `Implicit Conversion (String * Number): ${implicit2}, typeof: ${typeof implicit2}`,
  );

  /**
   * ParseInt and ParseFloat:
   * The parseInt() and parseFloat() functions can convert a string into an integer or a floating-point number.
   * The second arg of parseInt is the radix, which specifies the base of the numeral system
   */
  let parsedInt = parseInt("42px", 10);
  let parsedFloat = parseFloat("42.42px");
  console.log(`parseInt: ${parsedInt}, typeof: ${typeof parsedInt}`);
  console.log(`parseFloat: ${parsedFloat}, typeof: ${typeof parsedFloat}`);

  /**
   * JSON.parse and JSON.stringify:
   * These functions are used for converting objects and arrays to JSON-formatted strings, and
   * vice versa
   */
  let obj = { key: "value" };
  let objToStr = JSON.stringify(obj);
  let strToObj = JSON.parse(objToStr);
  console.log(`JSON.stringify: ${objToStr}, typeof: ${typeof objToStr}`);
  console.log(
    `JSON.parse: ${JSON.stringify(strToObj)}, typeof: ${typeof strToObj}`,
  );

  /**
   * Nuances and Special Cases:
   * 1 - Using + with a string and a number results in string concatenation
   * 2 - Despite representing an invalid or unrepresentable value, 'typeof NaN' returns 'number'
   * 3 - Using parseInt() without specificying a radix can yield unpredictable results, especially
   *    with older browsers
   */
  console.log(
    `Nuances: "5" + 1 results in a string: ${"5" + 1}, typeof: ${typeof ("5" + 1)}`,
  );
  console.log(`Nuances: typeof NaN is ${typeof NaN}`);
  console.log(`Nuances: parseInt("010") without radix is ${parseInt("010")}`);
}

typeConversion();
