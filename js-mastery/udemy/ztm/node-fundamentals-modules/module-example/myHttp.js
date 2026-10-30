// in node each individual file is considered a module and then
// we build more complex modules putting those together like building
// blocks

// But to use our other modules in this module, putting our blocks together
// we need to use require/module.exports or import/export if working with
// type:module or .mjs 

const request = require('./myRequest');
const response = require('./myResponse');

function makeRequest(url,data){
  request.send(url,data);
  return response.read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

/**
 * Do I understand what's happening here above?
 * We are loading our modules (myRequest and myResponse) from local custom
 * modules with 'require' and setting those to const variables in this
 * module. Then we use them in our 'makeRequest' function.
 * 
 * makeRequest uses the request.send function to with the url 'https://google.com'
 * and the data 'hello'. then the function in our myRequest module, takes those
 * args and simply uses our internal 'encrypt' function which is just 
 * returning a simple string 'encrypted data' and consoling what it is 
 * doing 'sending...'.
 * 
 * then we return our response.read() result which uses the module
 * function we created in myResponse. Which simply takes no args and uses
 * the internal 'decrypt' function to return another string 'decrypted data'
 * So in actuality the functions are connecting in anyway or passing data
 * they are just simulating with strings being returned. Finally our makeRequest
 * function returns that string from response.read() into our const responseData
 * with we console.log at the end. 
 */