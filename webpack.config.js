const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV || 'development';
const DEBUG = process.env.DEBUG;
// const HOST = 'localhost';
// const PORT = parseInt(process.env.PORT, 10) + 1 || 3001;

module.exports = {
  devtool: 'eval-source-map',

  context: __dirname,

  entry: {
    'app': (DEBUG || ENV === 'development')
         ? [
             'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
             './app/app.jsx'
           ]
         : './app/app.jsx'
  },

  output: {
    path: path.resolve('./public/javascripts'),
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js',
    publicPath: '/javascripts/'
  },

  module: {
    loaders: [
      { test: /\.js[x]$/, include: path.join(__dirname, 'app'), loaders: ['babel'] }
    ]
  },

  progress: false,

  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [

    // hot reload
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
