import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').rotues;

    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      rootEl
    );
  });
}
