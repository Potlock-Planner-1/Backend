const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const potluckRouter = require("../users/potluck-router.js");
const itemRouter = require("../users/items-router.js");
const guestRouter = require("../users/guests-router.js")

const authenticate = require("../auth/authenticate-middleware.js");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter)
server.use("/api/users",authenticate, usersRouter)
server.use("/api/potlucks", potluckRouter)
server.use("/api/items", itemRouter)
server.use("/api/guests", guestRouter)


server.get("/", (req, res) => {
    res.json({ api: "We Are In Backend Build Week. Server Is Up And Running............................" });
  });

module.exports = server;