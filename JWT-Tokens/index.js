const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3005;

app.all("/", (req, res) => {
  const apiKey = req.header["x-api-key"];
  const token = jwt.sign({ user: "Rohit Kumar" }, "sakjsbdkjasbkajc");
  const verify = jwt.verify(token, "sakjsbdkjasbkajc");
  console.log(verify);
  console.log(apiKey);

  res.end(token);
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
