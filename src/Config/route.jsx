import { Main, Portofolio } from '../Pages';

const routes = [
  {
    path: '/portofolio',
    component: Portofolio,
  },
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/',
    component: Main,
  },
];
export default routes;
