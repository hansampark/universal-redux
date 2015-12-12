import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import routes from './routes'

ReactDOM.render(routes, Router.HashLocation, (Root) => {
  console.log('client')
  ReactDOM.render(<Root/>, document.querySelector('#app'));
});
