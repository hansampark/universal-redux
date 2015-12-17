const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV || 'development';
const DEBUG = process.env.DEBUG;

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
      {
        test: /\.js[x]$/,
        include: path.join(__dirname, 'app'),
        loaders: ['babel']
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, 'app'),
        loaders: ['json']
      },
      {
        test: /\.css$/,
        loader: (DEBUG || ENV === 'development')
              ? 'style!css?modules&localIdentName=[name]--[local]!postcss?pack=cleaner'
              : ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]--[local]--[hash:base64:5]!postcss?pack=cleaner')
      },
    ]
  },

  postcss: function() {
    return {
      defaults: [autoprefixer, precss],
      cleaner: [autoprefixer({ browsers: ['last 2 versions'] })]
    };
  },

  progress: false,

  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    // hot reload
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ]
};
