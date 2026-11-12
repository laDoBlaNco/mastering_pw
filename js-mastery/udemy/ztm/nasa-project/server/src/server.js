const http = require("http");

const app = require("./app");

const { loadPlanetData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

/**
 * In using cjs we can't have an await at the top level of a file since its not
 * in an async function. esm modules allow this. Therefore we need to do one additional
 * process and create an async function to start our server
 */
async function startServer(){
  await loadPlanetData(); // remember that this function doesn't return anything
  server.listen(PORT, () => console.log(`...listening on port ${PORT}`));
}

startServer();

