/**
 * For more information visit
 * https://www.npmjs.com/package/bottlejs
 */
const Bottle = require('bottlejs'); // Dependency Injection Container
const container = new Bottle();

// Server
const server = require('../server/server');

const helpers = require('./container.helpers');
const controllers = require('./container.controllers');
const models = require('./container.models');

container.constant('helpers', helpers);
container.serviceFactory('server', server, 'helpers.logger');
container.serviceFactory('coinsModel', models.coinsModel);
container.serviceFactory('coinsController', controllers.coinsController, 'coinsModel', 'helpers.logger');

module.exports = container.container;
