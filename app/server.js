import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import i18n from 'i18n-abide';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import HTML from './views/html';
import Layout from './routes/layout';
import { routes } from './routes';

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, '../public');
const server = express();
const router = server.Router;


// server.use(i18n.abide({
//   supported_languages: ['en-US', 'de', 'es', 'db-LB', 'it-CH'],
//   default_lang: 'en-US',
//   debug_lang: 'it-CH',
//   translation_directory: 'i18n'
// }));

if (ENV === 'development') {
  let webpack = require('webpack');
  let webpackConfig = require('../webpack.config');
  let webpackDevMiddleware = require('webpack-dev-middleware');
  let hotMiddleware = require('webpack-hot-middleware');
  let compiler = webpack(webpackConfig);
  server.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  server.use(hotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
}

server.use(express.static(PUBLIC_PATH));

server.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, props) => {
    if (error) {
      // TODO: Render error page
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const { lang, lang_dir } = res.locals;
      const head = {

      };
      const styles = [
        <link key="normalize" rel="stylesheet" href="" />
      ];
      const scripts = [
        <script key="main" type="text/javascript" src="/javascripts/app.js" charSet="utf-8"></script>
      ];

      res.status(200).send('<!DOCTYPE html>' + ReactDOM.renderToStaticMarkup(
        <HTML lang={lang} dir={lang_dir} head={head} styles={styles} scripts={scripts}>
          <RoutingContext {...props} />
        </HTML>
      ));
    } else {
      // TODO: Render 404 page
      res.status(404).send('Not found');
    }
  })
})

export default server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})
