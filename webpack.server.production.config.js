var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: path.join(__dirname, 'server.js'),
  target: 'node',
  output: {
    path: __dirname,
    filename: 'server_build.js'
  },
  externals: nodeModules,
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0"],
        "plugins": [
          ["transform-decorators-legacy"]
        ]
      }
    }, {
      test: /\.css?$/,
      loader: 'css-loader/locals'
    }]
  }
};
