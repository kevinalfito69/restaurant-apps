import RestaurantDb from '../../globals/restaurant-db';
import UrlParser from '../../routes/url-parser';
import templateCreator from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <article class="restaurant__detail">
    </article>

        `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDb.detailResto(url.id);
    const main = document.querySelector('.restaurant__detail');

    main.innerHTML = templateCreator.createDetailResto(resto);
  },
};
export default Detail;
