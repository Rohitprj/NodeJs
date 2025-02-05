// config

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

// // controllers
// const Register = require("../models/mongoModules");
// const Login = require("../models/mongoModules");

// async function loginAuth(req, res) {
//   try {
//     const { email, password } = req.body;
//     const user = new Login({ email, password });
//     console.log("hi");
//     const result = await user.save();
//     console.log(result);
//     res.end();
//   } catch (e) {
//     console.log(e);
//   }
// }
// module.exports = loginAuth;

// async function registrationAuth(req, res) {
//   try {
//     const { name, email, password, pNo } = req.body;
//     const user = new Register({ name, email, password, pNo });
//     console.log("hello register");
//     const result = await user.save();
//     console.log(result);
//     res.end();
//   } catch (e) {
//     console.log(e);
//   }
// }
// module.exports = registrationAuth;

// // model

// const mongoose = require("mongoose");

// const loginSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: Number, required: true, unique: true },
// });
// const Login = mongoose.model("Login", loginSchema);

// module.exports = Login;

// const regSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: Number, required: true, unique: true },
//   pNo: { type: Number, required: true, unique: true },
// });
// const Register = mongoose.model("Register", regSchema);

// module.exports = Register;

// // routes

// const express = require("express");
// const router = express.Router();
// const loginAuth = require("../controllers/mongoControllers");
// const registrationAuth = require("../controllers/mongoControllers");

// router.post("/login", loginAuth);
// router.post("/register", registrationAuth);

// module.exports = router;

// // index.js

// const express = require("express");
// const mongoRoutes = require("./src/routes/mongoRoutes");
// const { connectDB } = require("./src/config/mongoConnect");
// const app = express();
// app.use(express.json());
// const PORT = 3003;
// connectDB();
// app.use("/mongo", mongoRoutes);
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
