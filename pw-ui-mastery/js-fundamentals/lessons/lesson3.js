// lesson3.js
//Objects
let customer = {
    firstName:'John',
    lastName:'Smith',
    cars: ['Volvo','Toyota','Tesla'], // we can put arrays inside of objects
}

console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer['firstName'])
console.log(customer['lastName'])

// dot notation
customer.firstName = 'Mike'
// bracket notation
customer['lastName'] = 'Silver'
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
let cars = ['Volvo','Toyota','Tesla'] // zero indexed ordered collection
console.log(cars[0])
console.log(cars[1])
cars[1] = 'BMW'
console.log(cars[1])
console.log(customer.cars[0])



