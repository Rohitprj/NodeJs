const express = require("express");
const app = express();
const { routes } = require("./src/Routes/routesAuth");
const { createDB } = require("./src/Config/db");
const PORT = 3008;
app.use(express.json());

createDB();

app.use("/", routes);

app.listen(PORT, () => {
  console.log("server started", PORT);
});
