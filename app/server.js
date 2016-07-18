import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import HTML from './views/html';
import { routes } from './routes';

const { NODE_ENV } = process.env;
const ENV = NODE_ENV || 'development';
const ASSETS_PATH = path.resolve(__dirname, '../assets');
const PUBLIC_PATH = path.resolve(__dirname, '../public');
const server = express();

// TODO: Would be nice if ASSETS_PATH is not needed
server.use(express.static(ASSETS_PATH));
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
      // Only put global style here.
      let styles = [
        <link key="normalize"
          rel="stylesheet"
          href="/styles/normalize.css"
        />,
      ];
      const scripts = [
        <script key="app"
          type="text/javascript"
          src="/assets/app.js"
          charSet="utf-8"
        />
      ];

      if (ENV !== 'development') {
        styles.push(
          <link key="app"
            rel="stylesheet"
            href="/assets/app.css"
          />
        );
      }

      res.status(200).send([
        '<!DOCTYPE html>',
        ReactDOM.renderToStaticMarkup(
          <HTML
            lang={lang}
            dir={lang_dir}
            head={head}
            styles={styles}
            scripts={scripts}
          >
            <RouterContext {...props} />
          </HTML>
        )
      ].join(''));
    } else {
      // TODO: Render 404 page
      res.status(404).send('Not found');
    }
  });
});

export default server;
