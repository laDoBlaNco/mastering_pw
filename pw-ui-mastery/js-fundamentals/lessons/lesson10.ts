let customerFirstName = 'John'
let customerLastName = 'Smith'
let customerAge = 49

// customerFirstName = 100 - Type 'number' is not assignable to type 'string'.
// ts infers the type as expected. But if we actually notate it, then no
// inferrence is necessary and ts will stop us from assigning a value type
// incorrectly.

let customerFirstName2: string = 'John'
let customerLastName2: string = 'Smith'
// let customerAge2: number = "Kevin" // Type 'string' is not assignable to type 'number'.

type Customer = {
  firstName: string,
  lastName: string,
  age: number,
  active:boolean
}

let firstCustomer: Customer = {
  firstName: "Mary",
  lastName: 'Johns',
  active: true,
  age: 19,
}