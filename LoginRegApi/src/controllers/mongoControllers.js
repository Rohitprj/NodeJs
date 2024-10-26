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
