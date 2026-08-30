// lesson5.js
// Logical AND (&&) Operator
console.log(true && true) // all values must be true
console.log(true && false) // all values must be true

// Logical OR (||)
console.log(true || false) // any one value must be true
console.log(false || false)

let ageIsMoreThan18 = false
let isUSCitizen = true

let eligibilityForDriversLicense = ageIsMoreThan18 && isUSCitizen
console.log(`This customer is eligible for DL: ${eligibilityForDriversLicense}`)

// Logical NOT (!)
console.log(!true) // opposite of boolean
console.log(6 != 10)
console.log(1 !== '1') // negates both value and type