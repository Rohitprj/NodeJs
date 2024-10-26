const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: Number, required: true, unique: true },
});
const Login = mongoose.model("Login", loginSchema);
module.exports = Login;
