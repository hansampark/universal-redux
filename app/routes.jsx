import ApplicationLayout from './components/layout/application-layout';
import HomePage from './components/routes/home-page';
import AboutPage from './components/routes/about-page'

const routes = {
  path: '',
  component: ApplicationLayout,
  childRoutes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }
  ]
};

export { routes };
