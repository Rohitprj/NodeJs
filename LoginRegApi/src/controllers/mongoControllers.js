const Register = require("../models/mongoModules");
const Login = require("../models/mongoModules");

async function loginAuth(req, res) {
  try {
    const { email, password } = req.body;
    const user = new Login({ email, password });
    console.log("hi");
    const result = await user.save();
    console.log(result);
    res.end();
  } catch (e) {
    console.log(e);
  }
}
module.exports = loginAuth;

async function registrationAuth(req, res) {
  try {
    const { name, email, password, pNo } = req.body;
    const user = new Register({ name, email, password, pNo });
    console.log("hello register");
    const result = await user.save();
    console.log(result);
    res.end();
  } catch (e) {
    console.log(e);
  }
}
module.exports = registrationAuth;
