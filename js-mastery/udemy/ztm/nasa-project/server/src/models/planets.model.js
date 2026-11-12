const fs = require("node:fs");
const path = require('node:path');

const { parse } = require("csv-parse");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

/**
 * The conceptual challenge we run into is that this model code is async and our
 * server won't wait for our datastream to load and parse our planets file. so we need
 * to make it wait by creating a promise which we can then use to set our server
 * calls to async/await. if we don't then we'll have what is basically flaky or
 * race condition in which our planet list could come out empty from time to time
 *
 *
 * const promise = new Promise((resolve,reject)=>{
 *  resolve(42)
 * });
 * promise.then((result) => {
 *  // handle our result which will be 42
 * })
 *
 * or
 *
 * const result = await promise;
 * console.log(result);
 */

// parse({options: ''});

function loadPlanetData() {
  return new Promise((resolve,reject) => {
    fs.createReadStream(path.join(__dirname,'..','..','data','kepler_data.csv'))
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
      reject(err);
    })
    .on("end", () => {
      console.log(`${habitablePlanets.length} habitable planets found!`);
      // since we are only using the promise to ensure our data is successfully loading
      // there is no need to pass anything to our resolve(...). On resolve our server will
      // be pulling down the habitablePlanets array.
      resolve()
    });
  });
}

module.exports = {
  loadPlanetData,
  planets: habitablePlanets,
};
