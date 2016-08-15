import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import Page from '../page';

export default class AboutPage extends Component {
  render() {
    return <Page title="About">
      <p>A little bit about me.</p>
      <div>
        <RaisedButton label="test" primary />
      </div>
    </Page>;
  }
}
