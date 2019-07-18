const container = require('./container/container');

container.Server.registerRoutes(container.AppRoutes);
container.Server.start();
