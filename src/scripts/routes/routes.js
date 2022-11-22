import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Favorite,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};
export default routes;
