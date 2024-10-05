const express = require("express");

const { loginController } = require("../controllers/useControllers");
const router = express.Router();
router.get("/login", loginController);

module.exports = router;
