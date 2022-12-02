import Detail from '../views/pages/detail';
import Index from '../views/pages';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Index,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};
export default routes;
