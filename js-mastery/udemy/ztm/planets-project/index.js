const { parse } = require("csv-parse");
const fs = require("node:fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

// parse({options: ''});
fs.createReadStream("./kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    }),
  ) // .pipe() connects two streams, here a readable stream to a writable stream (source -> destination)
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  }) // the on function returns the same emitter it was working same as Promises
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => planet["kepler_name"]));
    console.log(`${habitablePlanets.length} habitable planets found!`);
  });

/**
 * The results of a straight stream is a Buffer. A buffer is just a representation of the streaming data in bytes
 * as node doesn't know exactly what we are streaming (text vs audio vs video), Node has no idea and
 * at this point doesn't care
 *
 * readableStream.pipe(writableStream) - pipe is used to connect streams, mainly when we want to process it somehow lik
 * putting it through something that processes or manipulates the data. In this case our parse() stream which will process
 * our data into js objects representing rows of a csv file.
 */
