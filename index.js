/* eslint no-console: 0, no-var: 0 */

// Register babel to have ES6 support on the server
require('babel-polyfill');
require('babel-register');
require('css-modules-require-hook');
global.Promise = require('bluebird');

// // Require the intl polyfill
// require("./src/server/intl-polyfill");

// Prevent issues with libraries using this var (see http://tinyurl.com/pcockwk)
delete process.env.BROWSER;
const server = require('./app/server');