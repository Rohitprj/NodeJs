const express = require("express");

const { getUsers } = require("../controllers/useControllerdb");
const routers = express.Router();
routers.get("/School", getUsers);
module.exports = routers;
