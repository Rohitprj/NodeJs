const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3003;
app.use(express.json());
app.use(morgan());
const data = [];

// app.get("/demo/", (req, res) => {
//   console.log(req.query);
//   res.end("Hello server");
// });

app.get("/demo/:name", (req, res) => {
  console.log(req.params.name);
  res.end("Hello data");
});

// app.post("/post", (req, res) => {
//   console.log(req.body);
//   res.end("hello this is my post request ");
// });

app.post("/register", (req, res) => {
  const { userName, password } = req.body;
  data.push({ userName, password });
  res.end("hello this is my register request ");
  console.log(data);
});

app.post("/login", (req, res) => {
  const { userName, password } = req.body;
  const user = data.find(
    (user) => user.userName === userName && user.password === password
  );
  if (user) {
    res.json({ message: "login success" });
  } else {
    res.json({ message: "login failed" });
  }
});
app.listen(PORT, () => {
  console.log("server is running on port :", PORT);
});
