const express = require("express");
const { routes } = require("./src/routers/productsRoute");
const { connectDB } = require("./src/config/db");
const app = express();
const port = 3007;
connectDB();
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
