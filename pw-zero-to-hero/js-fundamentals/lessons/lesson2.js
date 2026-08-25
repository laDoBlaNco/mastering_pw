// Concatenation and Interpolation
let price = 80
let itemName = 'Table'
let messageToPrint = "The price for your " +itemName+ " is " +price+" dollars" //concatentation
console.log(messageToPrint)

let messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageToPrint2)
