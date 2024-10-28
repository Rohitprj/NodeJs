const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: Number, required: true, unique: true },
});
const Login = mongoose.model("Login", loginSchema);

module.exports = Login;

const regSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true, unique: true },
  pNo: { type: Number, required: true, unique: true },
});
const Register = mongoose.model("Register", regSchema);

module.exports = Register;
