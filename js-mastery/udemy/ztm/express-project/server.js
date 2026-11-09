const express = require("express");
const path = require("node:path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

app.set("view engine", "hbs");
app.set('views',path.join(__dirname,'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here for the upstream response. This middleware at this
  // point gets paused and sits on the stack waiting for the upstream
  // but in this context it only works on synchronous code. with async it
  // breaks as they event loop doesn't wait before unwinding the stack.
  // other frameworks use async middleware but in express I would need to
  // use event listeners for example to listen for 'finish', when working with
  // async code.
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// another middleware is for serving static websites
app.use("/site", express.static(path.join(__dirname, "public")));
// express also includes some builtin middleware as well. express.json
// helps us parse json without all the manual manipulation
// header must be set to 'Content-Type':'application/json' to work
app.use(express.json());

app.get('/', (req,res) => {
  res.render('index.hbs', {
    title: 'My Friends Are Very Clever',
    caption: "Let's go skiing!",
  })
})

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
