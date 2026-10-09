require("dotenv").config();

const config = {
  port: process.env.PORT || 3001,
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  api: {
    prefix: "/api",
    version: "v1",
  },
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    method: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  },
};

module.exports = config;
