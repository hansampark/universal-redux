import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../webpack.config';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT ? (process.env.PORT + 1) : 3001;

const options = {
  contentBase: `http://${HOST}:${PORT}`,
  hot: true,
  inline: true,
  lazy: false,
  progress: false,
  publicPath: `http://${HOST}:${PORT}/assets/`,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  proxy: {
    '*': `http://${HOST}:${PORT - 1}`
  },
   headers: { 'Access-Control-Allow-Origin': '*' }
};

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, options);

export default devServer.listen(PORT, HOST, () => {
  console.log("Webpack development server listening on %s:%s", HOST, PORT);
});
