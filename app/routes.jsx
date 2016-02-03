import ApplicationLayout from './components/layout/application-layout';
import HomePage from './components/routes/home-page';
import GraphPage from './components/routes/graph-page';
import AboutPage from './components/routes/about-page';

const routes = {
  path: '',
  component: ApplicationLayout,
  childRoutes: [
    { path: '/', component: HomePage },
    { path: '/graph', component: GraphPage },
    { path: '/about', component: AboutPage }
  ]
};

export { routes };
