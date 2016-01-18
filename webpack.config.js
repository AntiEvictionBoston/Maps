'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};

module.exports = {
  target: 'web',
  cache: true,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.join(srcPath, 'map.js')
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: __dirname,
    filename: 'maps.js',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
  debug: isProduction() ? false : true,
  devtool: isProduction() ? '' : 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true
  }
};
