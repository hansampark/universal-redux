import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'

Router.run(routes, Router.HashLocation, (Root) => {
  console.log('client')
  ReactDOM.render(<Root/>, document.querySelector('#app'));
});
