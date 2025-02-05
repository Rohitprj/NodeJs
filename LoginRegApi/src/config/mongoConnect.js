const mongoose = require("mongoose");

function connectDB() {
  try {
    mongoose.connect("mongodb://localhost:27017/E-Commerce");
    console.log("DB working");
  } catch (e) {
    console.log("not working", e);
  }
}
module.exports = { connectDB };
