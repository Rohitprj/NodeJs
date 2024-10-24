const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    category: { type: String },
    price: { type: Number },
    in_stock: { type: Boolean, default: true },
    rating: { type: Number, min: 0, max: 5 },
    brand: { type: String },
    color: { type: String },
    warranty_years: { type: Number },
    shipping_cost: { type: Number },
    address: { type: [String] },

    //   name: { type: String, required: true },
    //   email: { type: String, required: true, unique: true },
    //   password: { type: String, required: true },
  },
  { collection: "dummyData" }
);

// const User = mongoose.model("users", productSchema);
const User = mongoose.model("dummy", productSchema);
module.exports = User;
