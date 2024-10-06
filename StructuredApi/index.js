const express = require("express");
const app = express();
const router = require("./src/routes/useRoutes");
const routers = require("./src/routes/useRoutesdb");
const { connectDB } = require("./src/config/db");
const port = 3004;
connectDB();
app.use("/user", router);
app.use("/", routers);
app.listen(port, () => {
  console.log("server is running on port :", port);
});
