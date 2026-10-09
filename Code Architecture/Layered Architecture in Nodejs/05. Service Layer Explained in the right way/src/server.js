const config = require("./constants/config.constant");
const configDatabase = require("./configs/db/db.config");
const app = require("./app");

async function mainServer() {
  try {
    await configDatabase();
    if (!config.port) throw new Error("port required to setup server");

    app.listen(config.port, () =>
      console.log(`Server up and running on http://localhost:${config.port}`),
    );
  } catch (error) {
    console.error(`Error, while setup server: ${error.message}`);
  }
}

mainServer();
