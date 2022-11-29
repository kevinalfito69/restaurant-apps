import RestaurantDb from '../../globals/restaurant-db';
import UrlParser from '../../routes/url-parser';
import { createDetailResto, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <article class="restaurant__detail">
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
    const likeContainer = document.querySelector('#LikeContainer');
    likeContainer.innerHTML = createLikeButtonTemplate();
  },
};
export default Detail;
