import FavoriteRestaurantIdb from '../../globals/favorite-resto-idb';
import FavoriteRestoSearchPresenter from './liked-resto/favorite-resto-search-presenter';
// import { createItemResto } from '../templates/template-creator';
import FavoriteRestoSearchView from './liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-resto/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();
const Favorite = {
  async render() {
    return view.getTemplate();
  },
  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteResto: FavoriteRestaurantIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteResto: FavoriteRestaurantIdb });
  },
};

export default Favorite;
