import Layout from './routes/layout';
import Index from './routes/index';
import About from './routes/about'

const routes = {
  path: '',
  component: Layout,
  childRoutes: [
    { path: '/', component: Index },
    { path: '/about', component: About }
  ]
}

export { routes };
