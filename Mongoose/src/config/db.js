const mongoose = require("mongoose");

function mongoose() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/School");
    console.log("Mongoose");
  } catch (e) {
    console.log(e);
  }
}
