const path = require('path');
const webpack = require('webpack');
const DIST_PATH = path.resolve(__dirname, './dist');
const HOST = 'localhost';
const PORT = parseInt(process.env.PORT, 10) + 1 || 3001;

module.exports = {
  devtool: 'eval-source-map',

  context: path.resolve(__dirname),

  entry: {
    'main': [
      'webpack-dev-server/client?http://' + HOST + ':' + PORT,
      'webpack/hot/only-dev-server',
      './app/app.jsx'
    ]
  },

  output: {
    path: DIST_PATH,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js',
    publicPath: 'http://' + HOST + ':' + PORT + '/dist/'
  },

  module: {
    loaders: [
      { test: /\.js[x]$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      // 'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  plugins: [

    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.DefinePlugin({ __CLIENT__: true, __SERVER__: false }),

    // // stats
    // function () {
    //   this.plugin('done', notifyStats);
    // },
    // function () {
    //   this.plugin('done', writeStats);
    // }
  ]
};
