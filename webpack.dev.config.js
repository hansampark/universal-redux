const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const precss = require('precss');
const path = require('path');
const webpack = require('webpack');

const { PORT } = process.env;
const ENV = 'development';
const BROWSER_LIST = ['last 2 versions'];
const APP_PORT = PORT || 3000;
const DEV_SERVER_PORT = APP_PORT + 1;

const webpackConfig = {
  devtool: '#cheap-module-eval-source-map',
  cache: true,
  debug: true,

  context: __dirname,

  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${DEV_SERVER_PORT}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      'babel-polyfill',
      './app/app.jsx'
    ]
  },

  output: {
    path: path.resolve('./public/dist'),
    filename: '[name].js',
    publicPath: '/assets/'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, 'app'),
        loaders: ['json']
      },
      {
        test: /\.[s]css$/,
        loader: 'style!css?modules&localIdentName=[name]--[local]!postcss'
      },
    ],
    noParse: /\.min\.js/,
  },

  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },

  postcss: function plugin(bundler) {
    return [
      postcssImport({ addDependencyTo: bundler }),
      autoprefixer({ browsers: BROWSER_LIST }),
      precss()
    ];
  },

  progress: false,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV),
        __BROWSER__: JSON.stringify(true),
      }
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};

module.exports = webpackConfig;
