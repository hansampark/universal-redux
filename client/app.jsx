import React from 'react'
import Router from 'react-router'
import routes from '../app/routes'

Router.run(routes, Router.HashLocation, (Root) => {
  console.log('client')
  React.render(<Root/>, document.querySelector('#app'));
});
