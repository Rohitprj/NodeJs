const { clients, db } = require("../config/db");

async function getProducts(req, res) {
  try {
    if (req.params.id) {
      const product = await db
        .collection("Products")
        .findOne({ productId: req.params.id });
      return res.json(product);
    } else {
      const products = await db.collection("Products").find().toArray();
      return res.json(products);
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getProducts };
