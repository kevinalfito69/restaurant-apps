import FavoriteRestaurantIdb from '../../globals/favorite-resto-idb';
import FavoriteRestoSearchPresenter from './liked-resto/favorite-resto-search-presenter';
// import { createItemResto } from '../templates/template-creator';
import FavoriteRestoSearchView from './liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-resto/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();
const Favorite = {
  async render() {
    return view.getTemplate();
    //     return `
    //     <section id="restaurant"  tabindex="0" >
    //     <h1 tabindex="0">Favorite restaurant list</h1>
    //     <p tabindex="0">
    //         Below is a list of your favorite restaurants, click on a restaurant name to add or remove.
    //     </p>
    //     <!-- Restaurant List -->
    //     <section class="restaurant__list">
    //         <!-- End Restaurant List -->
    //     </section>
    // </section>
    //     `;
  },
  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteResto: FavoriteRestaurantIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteResto: FavoriteRestaurantIdb });
    //   const resto = await FavoriteRestaurantIdb.getAllResto();
    //   const restoContainer = document.queryS                     elector('.restaurant__list');

    //   if (resto.length === 0) {
    //     restoContainer.innerHTML
    //               += "<p style='color:red;' >You haven't entered your favorite restaurant yet, enter the restaurant details and add it now!!</p>";
    //   }
    //   resto.forEach((restos) => {
    //     restoContainer.innerHTML += createItemResto(restos);
    //   });
  },
};

export default Favorite;
