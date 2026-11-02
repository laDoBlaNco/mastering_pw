function decrypt(data) {
  return "decrypted data";
}

module.exports = function read() {
  return decrypt("data");
}

/*
module.exports = {
  read,
};
*/
// And if the module just exports one item we can put it directly
// on the declaration without the .name, as the default export
// as above and then we change how we import it since its just
// the function itself - const read = require('/.myResponse');

// NOTE: Looks like the shortcut just using exports, doesn't work
// when setting it as default.