const config = require("./constants/config.constants");
const app = require("./app");
const DatabaseConfig = require("./configs/database/database.config");

async function startServer() {
  try {
    await DatabaseConfig.connect();

    app.listen(config.port, () => {
      console.log(
        `Server is up and running on port: http://localhost:${config.port}`,
      );
    });
  } catch (error) {
    console.error(`Error, while setup server: ${error.message}`);
  }
}

startServer();
