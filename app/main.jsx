import React from 'react';
import { render } from 'react-dom';
import { persistStore } from 'redux-persist';
import localforage from 'localforage';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configure-store';
import Root from './root';

const rootEl = document.getElementById('app');
const store = configureStore();
// Needed for onTouchTap in MaterialUI
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const onRehydrate = () => {
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootEl
  );
}

persistStore(
  store,
  { storage: localforage },
  onRehydrate
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
