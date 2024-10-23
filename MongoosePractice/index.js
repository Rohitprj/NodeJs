const mongoose = require("mongoose");
const express = require("express");
const getRoutes = require("./src/routes/getRoutes");
const { connectDB } = require("./src/config/db");

const app = express();
app.use(express.json());
const PORT = 3005;

connectDB();
app.use("/", getRoutes);
app.listen(PORT, () => {
  console.log("server", PORT);
});
