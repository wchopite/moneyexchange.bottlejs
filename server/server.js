/*
 * Application server setup and initialization
 */
const config = require('config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const debug = require('debug')('app:startup');

require('express-async-errors');

const Server = (logger, app) => {
  let server;
  const _app = app || express();
  const port = process.env.PORT || config.get('server.port');

  setMiddlewares({app: _app});
  setGlobalHealthCheck({app: _app});
  setGlobalErrorManagement({app: _app, logger});
  enableDevelopmentMode({app: _app});

  server = _app;

  server.start = () => {
    _app.listen(port, () => {
      logger.info(`${config.get('server.name')} service started`);
      logger.info(`Listening on port ${port}`);
    });
  };
  return server;
};

function setMiddlewares({app}) {
   // App middlewares
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   app.use(helmet());

   // Allow Origin
   app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept, Authorization'
     );
     if (req.method === 'OPTIONS') {
       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
       res.status(200).json({});
       return;
     }
     next();
   });

   return;
}

// global health check
function setGlobalHealthCheck({app}) {
  app.get('/', (req, res) => res.json({ status: 'ok' }));
  return;
}

function setGlobalErrorManagement({app, logger}) {
  app.use((error, req, res) => {
    logger.error(error.message, error);
    res.status(500).json({ message: 'Error', error: error.message });
  });
  return;
}

function enableDevelopmentMode({app}) {
  if (app.get('env') === 'development') {
    debug('Morgan enabled...');
    app.use(morgan('combined'));
  }
  return;
}

module.exports = Server;
