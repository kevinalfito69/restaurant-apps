import RestaurantDb from '../../globals/restaurant-db';
import UrlParser from '../../routes/url-parser';
import { createDetailResto } from '../templates/template-creator';
import LikeButtonInititator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <article class="restaurant__detail" tabindex="0" id="#main">
    <!-- Skip content -->
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
    LikeButtonInititator.init({
      LikeContainer: document.querySelector('#LikeContainer'),
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
