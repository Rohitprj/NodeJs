const express = require("express");
const router = express.Router();
const User = require("../models/mongooseModel");
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
});
module.exports = router;
