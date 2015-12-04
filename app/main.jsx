import React, { Component } from 'react'
import { RouteHandler } from 'react-router'

export default class Main extends Component {
  render() {
    return (
      <section id="main">
        <header>Hello World</header>

        <RouteHandler />

        <footer>Footer</footer>
      </section>
    );
  }
}
