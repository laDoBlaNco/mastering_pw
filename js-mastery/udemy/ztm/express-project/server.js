const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Alberto Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

// Express handles most of the boilerplate under the hood.
app.get("/friends", (req, res) => {
  res.json(friends); // express will set the content-type and stringify by itself
});

// parameterized routes
app.get("/friends/:friendId", (req, res) => {
  const friendId = +req.params.friendId; // no string manipulation to parse urls with express
  // good to validate
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hellooooo Albert!</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages.");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
