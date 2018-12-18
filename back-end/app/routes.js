const express = require("express");
const routes = express.Router();
const authController = require("./Controllers/authController");
const authMiddleware = require("./middleware/auth");
const tweetController = require("./Controllers/tweetController");
const userController = require("./Controllers/userController");
const likeController = require("./Controllers/likeController");
const followController = require("./Controllers/followController");

routes.post("/signup", authController.signup);
routes.post("/signin", authController.signin);

// Authenticated routes
// All the routes above will use the authentication middleware
routes.use(authMiddleware);

// Tweets
routes.post("/tweets/create", tweetController.create);
routes.delete("/tweets/delete/:id", tweetController.destroy);

// Users
routes.put("/users", userController.update);

// Like
routes.post("/likes/:id", likeController.toggle);

// Follow
routes.post("/follow/:id", followController.follow);
routes.delete("/unfollow/:id", followController.unfollow);

module.exports = routes;
