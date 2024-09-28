const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req.query);
  res.end("Hello server");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.end("hello this is my post request ");
});
app.listen(3000);
