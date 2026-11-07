const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

// we can also have middleware specific to our routes
friendsRouter.use((req,res,next) => {
  console.log(`ip address: ${req.ip}`);
  next();
})

friendsRouter.post("/", friendsController.postFriend);
// Express handles most of the boilerplate under the hood.
friendsRouter.get("/", friendsController.getFriends);
// parameterized routes
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
