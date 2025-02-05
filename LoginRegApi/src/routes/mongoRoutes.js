// const express = require("express");
// const router = express.Router();
// const { loginAuth } = require("../controllers/mongoControllers");
// const { registrationAuth } = require("../controllers/mongoControllers");

// router.post("/login", loginAuth);
// router.post("/register", registrationAuth);

// module.exports = router;

const express = require("express");
const {
  loginAuth,
  registrationAuth,
} = require("../controllers/mongoControllers"); // ✅ Correct Import

const router = express.Router();

router.post("/login", loginAuth);
router.post("/register", registrationAuth);

module.exports = router;
