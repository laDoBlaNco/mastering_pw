// Lesson7.js

// Loops - repitiion or iteration

console.log('Hello world!');
console.log('Hello world!');
console.log('Hello world!');
console.log('Hello world!');
console.log('Hello world!');

/** Classic loop
 * for(start;condition;augment loop var){
 * 
 * }
 */
console.log();


for(let i=0;i<5;i++){
    console.log('Hello World! : '+ i);
}

/** for..of loop through collection items
 * 
 * for(var of collection){
 * 
 * }
 */

console.log();

let cars = ['Volvo','Toyota','Tesla','BMW','Mercedes','Kia Sedona']
for(let car of cars){
    console.log(car);
    
}


/** for..in loop through object indexes (or keys)
 * 
 * for(var in object){
 * 
 * }
 * 
 */
console.log();

for(let car in cars){
    console.log(car)
}
console.log();


// with conditions
for(let c of cars){
    console.log(c)
    if(c == 'BMW'){
        break
    }
}

console.log()
// Es6 syntax forEach
cars.forEach(car => console.log(car)) 