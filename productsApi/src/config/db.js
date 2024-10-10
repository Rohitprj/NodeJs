const { MongoClient } = require("mongodb");
const clients = new MongoClient("mongodb://127.0.0.1:27017/E-mail");
async function connectDB() {
  try {
    await clients.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
const db = clients.db();

module.exports = { clients, connectDB, db };
