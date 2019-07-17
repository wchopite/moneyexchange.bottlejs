/**
 * For more information visit
 * https://www.npmjs.com/package/bottlejs
 */
const Bottle = require('bottlejs'); // Dependency Injection Container
const bottle = new Bottle();

// Utils
const utils = require('../api/utils');

// Controllers
const coinsControllerFactory = require('../api/controllers/coinsController');

// Models
const coinModelFactory = require('../api/models/coinModel');

bottle.constant('utils', utils);
bottle.serviceFactory('coinModel', coinModelFactory);
bottle.serviceFactory('coinsController', coinsControllerFactory, 'coinModel', 'utils.logger');

module.exports = bottle.container;
