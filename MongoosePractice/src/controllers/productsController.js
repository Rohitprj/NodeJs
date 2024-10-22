const { default: mongoose } = require("mongoose");
const User = require("../models/productsModel");
async function getProducts(req, res) {
  const user = await User.find().toArray();
  console.log("Query");
  res.json(user);
  res.end();
}
module.exports = getProducts;
