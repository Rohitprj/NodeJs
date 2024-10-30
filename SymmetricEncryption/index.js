const express = require("express");
const crypto = require("crypto");

const mongoRoutes = require("./src/routes/mongoRoutes");
const { connectDB } = require("./src/config/mongoConnect");
const app = express();
app.use(express.json());
const PORT = 3003;
connectDB();
app.use("/mongo", mongoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
