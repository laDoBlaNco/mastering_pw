const fs = require("fs");

const fileBuf = fs.readFileSync(process.argv[2]);
const nlCount = fileBuf.toString().split("\n").length - 1;
console.log(nlCount);
