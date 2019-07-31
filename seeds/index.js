const config = require('config');
const db = require('../dbConnection/index');
const coinsModel = require('../api/models/coinsModel');
const coinsData = require('./data/coins.json');

db(config.get('DB.url'), config.get('DB.options'))
  .connect()
  .then(async () => {
    // eslint-disable-next-line new-cap
    const conversion = new coinsModel(coinsData);
    await conversion.save();
    db().close();
  });
