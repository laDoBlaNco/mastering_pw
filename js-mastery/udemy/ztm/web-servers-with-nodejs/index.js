const http = require("node:http");
const { json } = require("node:stream/consumers");

const PORT = 3000;

const server = http.createServer();

const friends = [
  { id: 0, name: "Nikola Tesla" },
  { id: 1, name: "Sir Isaac Newton" },
  { id: 2, name: "Albert Einstein" },
];

server.on("request", (req, res) => {
  // req and res are streams. Readable and Writeable respectiviely
  const items = req.url.split("/");
  if (items[1] === "friends") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(
        JSON.stringify([
          { id: 0, name: "Nikola Tesla" },
          { id: 1, name: "Sir Isaac Newton" },
          { id: 2, name: "Albert Einstein" },
        ]),
      );
    }
    res.end();
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Issac!</li>");
    res.write("<li>What are your thoughts on atronomy?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
