import Detail from '../views/pages/detail';
import Index from '../views/pages/favorite';

const routes = {
  '/': Index,
  '/favorite': Index,
  '/detail/:id': Detail,
};
export default routes;
