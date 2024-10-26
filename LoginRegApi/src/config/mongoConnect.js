const mongoose = require("moongose");

function connectDB() {
  try {
    mongoose.connect("mongodb://localhost:27017/E-Commerce");
  } catch (e) {
    console.log("not working", e);
  }
}
module.exports = { connectDB };
