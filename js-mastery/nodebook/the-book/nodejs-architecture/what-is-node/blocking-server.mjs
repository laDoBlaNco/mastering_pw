import http from "node:http";

function busyWait(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

http.createServer((_req,res) => {
  console.log('Request received. Blocking...');
  busyWait(500);
  res.end('blocking\n');
}).listen(5000);
