const { Login, Register } = require("../models/mongoModules");

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
module.exports = { loginAuth, registrationAuth };

// const { Login, Register } = require("../models/mongoModules");

// async function loginAuth(req, res) {
//   try {
//     const { email, password } = req.body;

//     // ✅ Find user by email
//     const user = await Login.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ error: "User not found" });
//     }

//     // ✅ Check if password matches
//     if (user.password !== password) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     console.log("Login successful");
//     res.json({ message: "Login successful", user });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

// async function registrationAuth(req, res) {
//   try {
//     const { name, email, password, pNo } = req.body;
//     const user = new Register({ name, email, password, pNo });
//     console.log("hello register");
//     const result = await user.save();
//     console.log(result);
//     res.json({ message: "Registration successful", data: result });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// }

// module.exports = { loginAuth, registrationAuth };
