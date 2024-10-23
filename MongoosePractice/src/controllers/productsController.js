// const { default: mongoose } = require("mongoose");
// const User = require("../models/productsModel");
// async function getProducts(req, res) {
//   const user = await User.find();
//   console.log("Query");
//   res.json(user);
//   res.end();
// }
// module.exports = getProducts;

const { default: mongoose } = require("mongoose");
const User = require("../models/productsModel");

async function getProducts(req, res) {
  try {
    const products = await User.find();
    console.log("Query successful", products);
    res.json(products);
    res.end();
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = getProducts;
