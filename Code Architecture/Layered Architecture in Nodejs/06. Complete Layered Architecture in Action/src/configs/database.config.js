const mongoose = require("mongoose");
const config = require("../constants/config.constant");

async function configDatabase() {
  const { mongodb } = config;

  if (!mongodb.uri) throw new Error("mongodb-uri not provided");

  try {
    await mongoose.connect(mongodb.uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Error, while connecting database: ${error.message}`);
    process.exit(1);
  }
}

module.exports = configDatabase;
