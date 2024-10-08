const express = require("express");
const { getUser } = require("../Controllers/useConAuth");
const routes = express.Router();
routes.post("/auth", getUser);
module.exports = { routes };
