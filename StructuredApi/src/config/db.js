const { MongoClient } = require("mongodb");

const clients = new MongoClient("mongodb://127.0.0.1:27017/School", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDB() {
  try {
    await clients.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error.message);
    return;
  }
}
const db = clients.db();

module.exports = { clients, connectDB, db };
