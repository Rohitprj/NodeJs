const { MongoClient } = require("mongodb");
const clients = new MongoClient("mongodb://localhost:27017/E-mail");
async function createDB() {
  try {
    await clients.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}
const db = clients.db();
module.exports = { clients, createDB, db };
