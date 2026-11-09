const { parentPort, workerData } = require("node:worker_threads");

let result = 0;
for (let i = 0; i < workerData; i++) {
  result += i;
}

parentPort.postMessage(result);
