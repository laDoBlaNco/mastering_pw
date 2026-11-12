const express = require('express')

// more SoC separating our express and middleware code from 
// our general server code.
const app = express();
app.use(express.json());

module.exports = app;