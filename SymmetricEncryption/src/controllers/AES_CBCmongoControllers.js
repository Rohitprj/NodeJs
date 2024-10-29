const { Login, Register } = require("../models/mongoModules");

async function loginAuth(req, res) {
  try {
    const { email, password } = req.body;
    const user = new Login({ email, password });
    console.log("hi");
    const result = await user.save();
    console.log("Data", result);
    res.end();
  } catch (e) {
    console.log(e);
  } finally {
    res.end();
  }
}

async function registrationAuth(req, res) {
  try {
    const { name, email, password, pNo } = req.body;
    const user = new Register({ name, email, password, pNo });
    console.log("hello register");
    const result = await user.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    res.end();
  }
}
module.exports = { registrationAuth, loginAuth };
