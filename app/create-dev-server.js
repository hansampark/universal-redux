/**
 * @flow
 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.dev.config';

const DevServer = (APP_PORT: number): WebpackDevServer => (
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,

    inline: false,
    lazy: false,
    quiet: true,
    noInfo: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    stats: {
      colors: true,
    },
    proxy: {
      '*': `http://localhost:${APP_PORT}`
    }
  })
);

export default DevServer;
