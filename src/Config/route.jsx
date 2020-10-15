import { Profil, Portofolio } from '../Pages';

const routes = [
  {
    path: '/portofolio',
    component: Portofolio,
  },
  {
    path: '/profil',
    component: Profil,
  },
  {
    path: '/',
    component: Profil,
  },
];
export default routes;
