/* eslint-disable */
var webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new WebpackConfig()
  .extend('./webpack/webpack.base.config.js')
  .merge({
    debug: false,
    plugins: [
    	new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ 
        compress: { warnings: false },
      })
    ],
  });