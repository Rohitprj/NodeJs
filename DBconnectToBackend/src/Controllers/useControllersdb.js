const { clients, db } = require("../Config/db");
async function getUser(req, res) {
  const user = await db.collection("DemoData").find().toArray();
  res.json(user);
}
module.exports = { getUser };
