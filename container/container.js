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
const routes = require('./container.routes');

container.constant('helpers', helpers);

container.serviceFactory('Server', server, 'helpers.logger');

container.serviceFactory('AppRoutes.coinsRoutes', routes.coinsRoutes, 'Server', 'Controllers.coinsController');

container.serviceFactory('Models.coinsModel', models.coinsModel);

container.serviceFactory('Controllers.coinsController', controllers.coinsController, 'Models.coinsModel', 'helpers.logger');

module.exports = container.container;
