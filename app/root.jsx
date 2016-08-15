/**
 * Root
 * @flow
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';
import { routes } from './routes';

const Root = () => (
  <MuiThemeProvider>
    <Router routes={routes} history={browserHistory} />
  </MuiThemeProvider>
);

export default Root;
