import React, { Component } from 'react'
import { RouteHandler } from 'react-router'

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1>Page</h1>
        <RouteHandler />
      </div>
    );
  }
}
