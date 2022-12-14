import RestaurantDb from '../../globals/restaurant-db';
import UrlParser from '../../routes/url-parser';
import { createDetailResto } from '../templates/template-creator';
import LikeButtonInititator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../globals/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <article class="restaurant__detail" tabindex="0" >
    </article>
    <div id="LikeContainer"></div>

        `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDb.detailResto(url.id);
    const main = document.querySelector('.restaurant__detail');
    main.innerHTML = createDetailResto(resto);
    console.log(LikeButtonInititator);
    LikeButtonInititator.init({
      LikeContainer: document.querySelector('#LikeContainer'),
      favoriteRestos: FavoriteRestaurantIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        rating: resto.rating,
        pictureId: resto.pictureId,
        city: resto.city,
        address: resto.address,
        description: resto.description,
        categories: resto.categories,
        menus: resto.menus,
        customerReviews: resto.customerReviews,
      },
    });
  },
};
export default Detail;
