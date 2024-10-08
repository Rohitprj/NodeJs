const { clients, db } = require("../Config/db");
async function getUser(req, res) {
  const { FullName, PnNo, Password } = req.body;
  try {
    const data = { FullName, PnNo, Password };
    const user = await db.collection("Username").insertOne(data);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
}
module.exports = { getUser };
