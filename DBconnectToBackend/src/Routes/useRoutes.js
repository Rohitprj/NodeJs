const express = require("express");
const { getUser } = require("../Controllers/useControllersdb");
const routes = express.Router();
routes.get("/travell", getUser);
module.exports = { routes };
