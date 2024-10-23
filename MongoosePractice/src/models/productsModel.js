const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  in_stock: { type: Boolean, required: true, default: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  warranty_years: { type: Number, required: true },
  shipping_cost: { type: Number, required: true },
  address: { type: [String], required: true },
  //   name: { type: String, required: true },
  //   email: { type: String, required: true, unique: true },
  //   password: { type: String, required: true },
});

// const User = mongoose.model("users", productSchema);
const User = mongoose.model("dummyData", productSchema);
module.exports = User;
