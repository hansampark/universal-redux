import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
// import routes from './routes'
import Index from './routes/index'

render((
  <Router>
    <Route path="/" component={Index} />
  </Router>
), document.getElementById('app'));
