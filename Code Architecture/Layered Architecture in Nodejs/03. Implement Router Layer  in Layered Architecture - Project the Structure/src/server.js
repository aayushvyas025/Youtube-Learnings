const app = require("./app");
const config = require("./constants/configs.constant");
const DatabaseConfig = require("./configs/db/database.config");

const startServer = async () => {
  try {
    await DatabaseConfig.connect();
    app.listen(config.port, () => {
      console.log(
        `Server is up and running on port http://localhost:${config.port}`,
      )
    });
  } catch (error) {
    console.error(`Error, while setup server: ${error.message}`);
  }
};


startServer(); 
