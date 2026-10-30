const { get } = require("https");

get("https://www.google.com", (response) => {
  response.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });

  response.on("end", () => console.log("No more data"));
});

/**
 * So lessons learned:
 * - using require to get built-in or custom modules
 * - when I know the function I'm using ('request', 'get', etc) I can
 *   use object destructuring rather than pulling in the whole module
 * - 'request' includes GET and POST functionality so I need to set
 *   the request const and call request.end() at the end. But if I 
 *   use 'get' it'll be call on its on. 
 * - there are http and https modules which are separate depending on 
 *   what protocol I need to use. They can't be mixed
 * - these are EventEmitters so we can use the .on() syntax to create
 *   handlers for events like 'data', and 'end'.
 */