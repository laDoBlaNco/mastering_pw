// lesson8.js

// Functions

// Declaritive functions:
function helloOne(){
    console.log('Hello one!')
}

helloOne()
helloOne()
console.log()

// Anonymous function - no name and no function hoisting

let helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()
helloTwo()
console.log()

// ES6 function (arrow functions)

let helloThree = ()=>{
    console.log('Hello three!')
}
helloThree()
helloThree()
console.log()

// functions with args
let printName = (name,lastName)=>{
    console.log(name+' '+lastName)
}
printName('ladoblanco','Whiteside')
printName('Odalis','Whiteside')
console.log()

// function with return
let multiplyByTwo = (num)=>{
    return num*2
}
console.log(multiplyByTwo(12))
console.log()

// import function
import{printAge} from '../helper/printHelper.js'
printAge(49)
console.log()

// import everything
import * as helper from '../helper/printHelper.js'

helper.printAge(10)





