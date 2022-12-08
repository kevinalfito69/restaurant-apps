import FavoriteRestaurantIdb from '../../globals/favorite-resto-idb';
import { createItemResto } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section id="restaurant"  tabindex="0" >
    <h1 tabindex="0">Favorite restaurant list</h1>
    <p tabindex="0">
        Below is a list of your favorite restaurants, click on a restaurant name to add or remove.
    </p>
    <!-- Restaurant List -->
    <section class="restaurant__list">
        <!-- End Restaurant List -->
    </section>
</section>
    `;
  },
  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllResto();
    const restoContainer = document.querySelector('.restaurant__list');

    if (resto.length === 0) {
      restoContainer.innerHTML
                += "<p style='color:red;' >You haven't entered your favorite restaurant yet, enter the restaurant details and add it now!!</p>";
    }
    resto.forEach((restos) => {
      restoContainer.innerHTML += createItemResto(restos);
    });
  },
};

export default Favorite;
