const express = require("express");
const { getProducts } = require("../controllers/controllersProducts");
const routes = express.Router();
routes.get("/products", getProducts);
routes.get("/product/:id", getProducts);
module.exports = { routes };
