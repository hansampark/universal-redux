import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { routes } from './routes';

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <Router routes={routes} history={browserHistory} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').rotues;

    render(
      <AppContainer>
        <Router routes={nextRoutes} history={browserHistory} />
      </AppContainer>,
      rootEl
    );
  });
}
