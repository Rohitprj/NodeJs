const express = require("express");
const app = express();
const router = require("./src/routes/useRoutes");
const port = 3004;
app.use("/user", router);
app.listen(port, () => {
  console.log("server is running on port :", port);
});
