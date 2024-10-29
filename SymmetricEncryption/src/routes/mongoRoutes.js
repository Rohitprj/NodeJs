const express = require("express");
const router = express.Router();
const {
  loginAuth,
  registrationAuth,
} = require("../controllers/AES_CBCmongoControllers");

router.post("/login", loginAuth);
router.post("/register", registrationAuth);

module.exports = router;
