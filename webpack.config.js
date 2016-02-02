'use strict';

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-import');
const precss = require('precss');
const path = require('path');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV || 'development';
const DEBUG = process.env.DEBUG;
const BROWSER_LIST = ['last 2 versions'];

let webpackConfig = {
  devtool: 'eval-source-map',

  context: __dirname,

  entry: {
    app: (DEBUG || ENV === 'development')
         ? [
           'webpack-hot-middleware/client',
           './app/app.jsx'
         ]
         : './app/app.jsx'
  },

  output: {
    path: path.resolve('./public/dist'),
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js',
    publicPath: '/assets/'
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
        test: /\.[s]css$/,
        loader: (DEBUG || ENV === 'development')
              ? 'style!css?modules&localIdentName=[name]--[local]!postcss'
              : ExtractTextPlugin.extract(
                  'style', 'css?modules&localIdentName=[name]--[local]--[hash:base64:5]!postcss'
                )
      },
    ]
  },

  postcss: function plugin(bundler) {
    return [
      postcssImport({ addDependencyTo: bundler }),
      autoprefixer({ browsers: BROWSER_LIST }),
      precss()
    ];
  },

  progress: false,

  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // hot reload
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (ENV !== 'development') {
  if (ENV === 'production') {
    delete webpackConfig.devtool;
  }

  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: ENV !== 'production',
      mangle: ENV === 'production'
    }),
    // TODO: find a way to create separate css map file
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  );
}

module.exports = webpackConfig;
