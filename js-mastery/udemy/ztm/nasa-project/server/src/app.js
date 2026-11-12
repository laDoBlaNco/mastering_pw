const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

// more SoC separating our express and middleware code from
// our general server code.
const app = express();

// middleware section
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
