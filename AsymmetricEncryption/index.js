const express = require("express");
const { rsa } = require("./crypto/RSA");
const app = express();
const PORT = 2001;
rsa();
app.get("/", (req, res) => {
  res.end("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
