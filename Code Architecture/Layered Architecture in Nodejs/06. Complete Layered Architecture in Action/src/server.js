const app = require("./app");
const config = require("./constants/config.constant");
const configDatabase = require("./configs/database.config");

async function mainServer() {
  try {
    await configDatabase();
    app.listen(config.port, () => {
      console.log(
        `Server is up and running on http://localhost:${config.port}`,
      );
    });
  } catch (error) {
    console.error(`Error, while setup the server: ${error.message}`);
    process.exit(1);
  }
}


mainServer(); 