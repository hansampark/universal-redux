/* eslint no-console: 0, no-var: 0 */

// Register babel to have ES6 support on the server
require('babel-register');

// // Require the intl polyfill
// require("./src/server/intl-polyfill");

// Prevent issues with libraries using this var (see http://tinyurl.com/pcockwk)
// delete process.env.BROWSER;
const server = require('./app/server');
const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
IS_DEV && require('./app/dev-server');
