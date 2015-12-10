import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../webpack.config';
import server from './server';

const HOST = process.env.HOST || 'localhost';
const PORT = (process.env.PORT + 1) || 3001;

const options = {
  contentBase: `http://${HOST}:${PORT}`,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
};

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, options);

export default devServer.listen(PORT, HOST, () => {
  console.log("Webpack development server listening on %s:%s", HOST, PORT);
});
