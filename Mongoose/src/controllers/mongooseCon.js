const User = require("../models/mongooseModel");

async function register(req, res) {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  console.log("hi");
  await user.save();
  res.end();
}
module.exports = register;
