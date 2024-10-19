const mongoose = require("mongoose");
const express = require("express");
const mongooseRoutes = require("./src/routes/mongooseRoutes");
const { mongooseFun } = require("./src/config/db");

const app = express();
app.use(express.json());
const PORT = 3003;

mongooseFun();
app.use("/user", mongooseRoutes);
app.listen(PORT, () => {
  console.log("server", PORT);
});
