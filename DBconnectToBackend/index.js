const express = require("express");
const app = express();
const { routes } = require("./src/Routes/useRoutes");
const { createDB } = require("./src/Config/db");
const PORT = 3008;

createDB();

app.use("/", routes);

app.listen(PORT, () => {
  console.log("server started", PORT);
});
