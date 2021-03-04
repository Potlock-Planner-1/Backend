const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const potluckRouter = require("../users/potluck-router.js");
const itemRouter = require("../users/items-router.js");
const guestRouter = require("../users/guests-router.js");

const { authenticate } = require("../auth/authenticate-middleware.js");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", authenticate, usersRouter);
server.use("/api/potlucks", authenticate, potluckRouter);
server.use("/api/items", itemRouter);
server.use("/api/guests", guestRouter);

server.get("/", (req, res) => {
  // const userId = req.body.user.id;
  console.log(req.body, "IDIDIDIDIDIDIDIDIDIDIDIDI");
  res.json({
    Api:
      "This Is Backend Server and It Is Up And Running............................",
    Routes: "/api/potlucks, /api/guests, /api/items, /api/users",
    Try:
      "https://potluckplanner1.herokuapp.com/api/guests, https://potluckplanner1.herokuapp.com/api/items",
  });
});

module.exports = server;
