const express = require("express");
const router = express.Router();
const login = require("../controllers/mongoControllers");
router.post("/login", login);
module.exports = router;
