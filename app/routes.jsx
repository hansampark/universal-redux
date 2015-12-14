import Layout from './routes/layout';
import Home from './routes/home';
import About from './routes/about'

const routes = {
  path: '',
  component: Layout,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
}

export { routes };
