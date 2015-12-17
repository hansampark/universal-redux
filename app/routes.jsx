import Layout from './components/routes/layout';
import HomePage from './components/routes/home-page';
import AboutPage from './components/routes/about-page'

const routes = {
  path: '',
  component: Layout,
  childRoutes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }
  ]
}

export { routes };
