const pet = { species: "Dog", name: "Elton", age: 1.5 };
console.log(typeof pet);
console.log(pet);
console.log(pet.species);

const key = "species";
console.log(pet[key]);
console.log(pet.key);

// all keys are stringified
pet[true] = "hello!!!";
console.log(pet[true]);
console.log(pet["true"]); // same thing here

pet.friends = []
console.log(pet);
pet.bark = function(){
  return 'WOOF WOOF!';
}
console.log(pet.bark());



