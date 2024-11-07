const { Login, Register } = require("../models/mongoModules");
const crypto = require("crypto");

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
    const dataPassed = {
      name,
      email,
      password,
      pNo,
    };
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    console.log("KEY", key);
    console.log("IV", iv);
    dataPassed.name = encryptData(JSON.stringify(dataPassed.name), key, iv);
    dataPassed.email = encryptData(JSON.stringify(dataPassed.email), key, iv);
    dataPassed.password = encryptData(
      JSON.stringify(dataPassed.password),
      key,
      iv
    );
    dataPassed.pNo = encryptData(JSON.stringify(dataPassed.pNo), key, iv);
    dataPassed.personal = iv.toString("hex");

    const user = new Register(dataPassed);
    const result = await user.save();
    console.log("hello register", result);
  } catch (e) {
    console.log(e);
  } finally {
    res.end();
  }
}

function encryptData(data, key, iv) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(data, "utf-8", "hex");
  encrypted = encrypted + cipher.final("hex");
  return encrypted;
}

module.exports = { registrationAuth, loginAuth };
