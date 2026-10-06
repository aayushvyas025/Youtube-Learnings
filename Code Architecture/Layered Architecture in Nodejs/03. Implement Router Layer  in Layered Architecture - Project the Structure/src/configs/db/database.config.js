const mongoose = require("mongoose");
const config = require("../../constants/configs.constant");

class DatabaseConfig {
  static async connect() {
    const { mongodb } = config;
    if (!mongodb.uri) throw new Error("MongoDB connection URI is not defined");

    const options = {
      maxPoolSize: 10, //  Maximum number of connections in the connection pool
      serverSelectionTimeoutMS: 5000, // Wait up to 5 seconds to find a suitable MongoDB server
      socketTimeoutMS: 4500, //  Close a socket if no data is received for 45 seconds
    };

    try {
      await mongoose.connect(mongodb.uri, options);
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
