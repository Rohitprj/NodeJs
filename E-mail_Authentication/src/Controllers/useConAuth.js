const { clients, db } = require("../Config/db");
async function getUser(req, res) {
  const { FullName, PnNo, Password } = req.body;
  try {
    const data = { FullName, PnNo, Password };
    const user = await db.collection("Username").insertOne(data);
    res.json(user);
    return;
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }
    console.log("Error = >", err);
    res.status(500).json({ error: "An error occurred. Please try again." });
    return;
  }
}
module.exports = { getUser };
