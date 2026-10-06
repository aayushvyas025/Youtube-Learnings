require("dotenv").config();

const configs = {
  port: process.env.PORT | 3001,
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  api: {
    prefix: "/api",
    version: "v1",
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  },
};

module.exports = configs;
