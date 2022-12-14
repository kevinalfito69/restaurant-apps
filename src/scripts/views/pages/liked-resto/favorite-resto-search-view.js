import { createItemResto } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
    <section id="restaurant"  tabindex="0" >
    <h1 tabindex="0">Favorite restaurant list</h1>
    <p tabindex="0">
    Below is a list of your favorite restaurants, click on a restaurant name to add or remove.
    </p>
    <div class='search__container'>
      <input id="query" type="text" class="search__input" placeholder="Put your favorite restaurant here...">
    </div>
          <!-- Restaurant List -->
        <section class="restaurant__list"id="restaurant__list">
    <!-- End Restaurant List -->
      </section>
    </section>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
      console.log(event.target.value);
    });
  }

  showFavoriteResto(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createItemResto(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurant__list').innerHTML = html;
    document.getElementById('restaurant__list').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
    <p style="color:red"  class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</p>
    `;
  }
}
export default FavoriteRestoSearchView;
