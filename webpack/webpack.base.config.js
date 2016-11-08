/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig()
  .merge({
    entry: {
      bundle: [
        './src/scripts/app.js'
      ],
    },
    output: {
      path: path.join(__dirname, '../dist'),
      publicPath: '/dist/',
      filename: 'scripts/[name].js',
      chunkFilename: 'scripts/[id].js',
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }, {
        test: /\.(svg|woff|woff2|eot|ttf|png)$/,  /* font-face loader */
        loader: 'file-loader?name=fonts/[hash].[ext]',
      }],
    },
    plugins: [
      new ExtractTextPlugin('css/[name].css', { allChunks: true }),
      new webpack.NoErrorsPlugin(),
    ],
    devtool: 'source-map',
  });
