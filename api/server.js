const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());


server.get("/", (req, res) => {
    res.json({ api: "We Are In Backend Build Week. Server Is Up And Running............................" });
  });

module.exports = server;