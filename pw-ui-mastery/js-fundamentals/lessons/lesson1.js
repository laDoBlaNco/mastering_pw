// 1. Hello World
console.log("Hello World!")

// Variables - the mechanism to hold data during execution
var firstName = 'John' // var is global scoped
let lastName = 'Smith' // let is block scoped
console.log(firstName)
console.log(lastName)

let age,dateOfBirth,sex
age = '5'
sex = 'Male'
console.log(age)
age = '6'
console.log(age)

// Constants
const occupation = 'Engineer'
console.log(occupation)
// occupation = 'driver' - error TypeError: Assignment to constant variable.

// also can't declare consts without initialization as we can with var and let
// const career - 'const' declarations must be initialized.

// Data Types - there are 7 primiitves

// The following is from google as the instructor says there are 5 primitive types but
// there are actually 7
// String: Represents textual data enclosed in single, double, or backtick quotes.
let name = 'Alice'

// Number: Represents both integers and floating-point (decimal) numbers
let pi = 3.14159

// BigInt: Represents integers with arbitrary precision that are too large for the standard Number limit.
let bigNum = 9007199254740991n

// Boolean: Represents a logical entity with only two possible values: true or false
let isLoggedIn = true;

// Undefined: Indicates that a variable has been declared but not yet assigned any value
let score // automatically undefined
let score2 = undefined

// Null: Represents an intentional, explicit absence of any object value.
let currentSeason = null

// Symbol: Generates a unique, completely immutable identifier primarily used for unique object properties
let uniqueID = Symbol("id")

/**
 * Core Characteristics:
 * 
 * Immutability: The actual value of a primitive cannot be altered. While I 
 * can reassign a varible to a new primitive value, I can't modify the original 
 * value
 * 
 * Passed by Value: When I assign or pass a primitive varible to another, JS copies
 * the literal value rather than pointing to a reference in memory
 * 
 * Auto-Boxing / Wrappers; When I try to access a method on a primitive (e.g., 
 * 'hello'.toUpperCase()), JS temporarily 'auto-boxes' the primitive value into its
 * corresponding object wrapper to perform the action, than instantly discards the
 * wrapper
 * 
 * A Gotcha:
 * If I use typeof operator to check the type of null, JS returns 'object'. This is
 * a well-known, historic bug in the language that can't be fixed without breaking
 * older websites, but null remains functionally a primitive.
 * 
 * JavaScript stored values using a binary type tag system in 1995. The tag for 
 * objects was 000. null was a null pointer, represented as all-zero bits. The 
 * typeof operator read the type tag from the binary representation and null's 
 * bits matched the object tag, so it returned "object". This was an implementation 
 * mistake acknowledged by Brendan Eich. It was never corrected because too much
 * production code on the web depended on the broken behavior, making backward 
 * compatibility more important than correctness.
 */

// Back to Udemy
var middleName = 'David' // string
var ageOfBrother = 25 // number (no quotes)
var isHeMarried = false // boolean
var yearsInMarriage = null // null - not having value FOR the variable
var numberofCars = undefined // undefined - doesn't exist






