const config = require('config');
const container = require('./container/container');
const db = require('./dbConnection/index');

db(config.get('DB.url'), config.get('DB.options'))
  .connect()
  .then(() => {
    container.Server.registerEndpoints(container.AppRoutes);
    container.Server.start();
  })
  .catch(err => {
    console.log(err);
  });
