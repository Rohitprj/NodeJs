const { clients, db } = require("../config/db");

async function getUsers(req, res) {
  const users = await db.collection("Teachers").find().toArray();
  res.json(users);
}

module.exports = { getUsers };
