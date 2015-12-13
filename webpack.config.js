const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const PUBLIC_PATH = path.resolve(__dirname, 'public');
const JS_PATH = path.join(PUBLIC_PATH, 'javascripts');
const HOST = 'localhost';
const PORT = parseInt(process.env.PORT, 10) + 1 || 3001;

module.exports = {
  devtool: 'eval-source-map',

  context: path.resolve(__dirname),

  entry: {
    'app': [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      './app/app.jsx'
    ]
  },

  output: {
    path: JS_PATH,
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js',
    publicPath: `http://${HOST}:${PORT}/assets/javascripts`
  },

  module: {
    loaders: [
      { test: /\.js[x]$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.DefinePlugin({ __CLIENT__: true, __SERVER__: false }),

    // stats
    function () {
      this.plugin('done', function(stats) {
        const statsJson = stats.toJson()
        fs.writeFileSync(
          path.join(__dirname, 'public', 'stats.json'),
          JSON.stringify(statsJson.assets)
        );
        // console.log(statsJson.assets, statsJson.assetsByChunkName)
      });
    }
  ]
};
