exports.REQUEST_TIMEOUT =  REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return "encrypted data";
}

module.exports.send = function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

/*
module.exports = {
  REQUEST_TIMEOUT,
  send,
};
*/
// so above we export everything by putting it into the object by name
// as I have commented out, or directly on the declaration as above
// using either the full 'module.exports.name = ' or 'exports.name='

// With all of these its the module.exports = {...} that's more 
// readable and clear.

// One last adjustment is to make our use of the module explicitly clear
// by using destructuring and picking out the items we are going to use
