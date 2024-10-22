const mongoose = require("mongoose");

function mongooseFun() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/School"); //mongodb+srv://<db_username>:<db_password>@cluster0.shqzn.mongodb.net/
    console.log("Mongoose");
  } catch (e) {
    console.log(e);
  }
}
module.exports = { mongooseFun };
