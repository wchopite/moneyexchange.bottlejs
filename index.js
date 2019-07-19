const container = require('./container/container');

container.Server.registerEndpoints(container.AppRoutes);
container.Server.start();
