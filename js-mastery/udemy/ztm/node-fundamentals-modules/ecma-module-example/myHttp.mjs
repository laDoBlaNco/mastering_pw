import { send } from "./myRequest.mjs";
import read from "./myResponse.mjs";

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https://google.com", "hello");
console.log(responseData);

/**
 * Same example but with ES Modules:
 * We needed to change the exts to .mjs (or add type:module to our 
 * package.json. 
 * 
 * We also had to update the syntax from 'require' to 'import from'
 * and from 'module.exports' to 'export'
 * 
 * Also when using .mjs its better to use the ext in the relative path
 * './myRequest' vs './myRequest.mjs'
 * 
 * 
 */

