// Database module
const mongoose = require('mongoose');

/**
 * Connect to database and return connection object
 */
module.exports = (url, options) => {
  return {
    connect() {
      return mongoose.connect(url, options);
    },
    close() {
      return mongoose.disconnect();
    }
  }
};
