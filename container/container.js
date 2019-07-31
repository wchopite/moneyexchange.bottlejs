/**
 * For more information visit
 * https://www.npmjs.com/package/bottlejs
 */
const config = require('config');
const Bottle = require('bottlejs'); // Dependency Injection Container
const server = require('../server/server');
const helpers = require('./container.helpers');
const controllers = require('./container.controllers');
const models = require('./container.models');
const routes = require('./container.routes');

const container = new Bottle();

container.constant('config', config);
container.constant('helpers', helpers);
container.serviceFactory('Server', server, 'helpers.logger');

// ========================= Routes ========================================
container.serviceFactory(
  'AppRoutes.coinsRoutes',
  routes.coinsRoutes,
  'Server',
  'Controllers.coinsController'
);
container.serviceFactory(
  'AppRoutes.conversionsRoutes',
  routes.conversionsRoutes,
  'Server',
  'Controllers.conversionsController'
);

// ========================= Models ========================================
container.serviceFactory('Models.coinsModel', models.coinsModel);
container.serviceFactory('Models.conversionsModel', models.conversionsModel);

// ========================= Controllers ===================================
container.serviceFactory(
  'Controllers.coinsController',
  controllers.coinsController,
  'Models.coinsModel',
  'helpers.logger'
);
container.serviceFactory(
  'Controllers.conversionsController',
  controllers.conversionsController,
  'Models.conversionsModel',
  'helpers.logger',
  'helpers.conversor.convert',
  'config'
);

module.exports = container.container;
