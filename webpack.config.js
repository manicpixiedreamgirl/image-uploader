/* eslint-disable */
const WebpackConfig = require('webpack-config');
const Target = process.env.npm_lifecycle_event;
var webpackConfig;

switch (Target) {
  case 'start':
    webpackConfig = './webpack/webpack.dev.config.js';
    break;
  default:
    webpackConfig = './webpack/webpack.prod.config.js';
    break;
}

module.exports = new WebpackConfig().extend(webpackConfig);