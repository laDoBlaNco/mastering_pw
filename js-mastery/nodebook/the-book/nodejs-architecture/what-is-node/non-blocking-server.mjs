import http from "node:http";

http
  .createServer((_req, res) => {
    console.log("Request received. Scheduling timer...");
    setTimeout(() => {
      console.log("Timer finished. Sending response.");
      res.end("non-blocking\n");
    }, 500);
  })
  .listen(5000);
