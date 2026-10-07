const mongoose = require("mongoose");
const config = require("../../constants/config.constants");

class DatabaseConfig {
  static async connect() {
    const { mongodb } = config;

    if (!mongodb.uri) throw new Error("mongodb uri not provided");

    try {
      await mongoose.connect(mongodb.uri);
      console.log(`Database connected successfully`);
    } catch (error) {
      console.error(`Error, while connecting database: ${error.message}`);
      process.exit(1);
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(`Database disconnect successfully`);
    } catch (error) {
      console.error(`Error, while disconnecting database: ${error.message}`);
    }
  }
}

module.exports = DatabaseConfig;
