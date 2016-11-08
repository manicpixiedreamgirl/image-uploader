/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig()
  .extend('./webpack/webpack.base.config.js')
  .merge({
    debug: true,
    devServer: {
      stats: 'errors-only',
      historyApiFallback: true,
      ignorePath: false,
      outputPath: path.join(__dirname, 'dist')
    },
  });