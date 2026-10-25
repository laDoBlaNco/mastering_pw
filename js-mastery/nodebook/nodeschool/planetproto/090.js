if (typeof claim === 'undefined'){
	global.claim = () => {};
	global.claim.same = () => {};
}
// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

function Robot(){

}

function Vehicle(){
	return {
		name: 'my own making',
	}
}

// console.log(new Robot());
// console.log(new Vehicle());

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
