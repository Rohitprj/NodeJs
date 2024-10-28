const express = require("express");
const router = express.Router();
const loginAuth = require("../controllers/mongoControllers");
const registrationAuth = require("../controllers/mongoControllers");

router.post("/login", loginAuth);
router.post("/register", registrationAuth);

module.exports = router;
