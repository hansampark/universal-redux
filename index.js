/* eslint no-console: 0, no-var: 0 */

// Register babel to have ES6 support on the server
require('babel-polyfill');
require('babel-register');
global.Promise = require('bluebird');
const hook = require('css-modules-require-hook');

hook({
  extensions: ['.css', '.scss']
});

delete process.env.BROWSER;
const server = require('./app/server');
