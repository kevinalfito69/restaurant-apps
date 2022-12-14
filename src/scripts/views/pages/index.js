import RestaurantDb from '../../globals/restaurant-db';
import { createItemResto } from '../templates/template-creator';

const Index = {
  async render() {
    return `
    <!-- Jumbotron -->
    <section id="jumbotron">
    <picture class="jumbotron__bg" >
    <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
    <source type="image/webp" srcset="./images/hero-image_4.webp">
    <img   src="./images/hero-image_4-large.jpg" alt="resto poster">
    </picture>
        <div class="jumbotron__desc">
            <h1 tabindex="0">
                Are you on vacation in Indonesia but confused about where to eat?
            </h1>
            <p tabindex="0">
                Many famous restaurants are available with the best dishes, don't have a lot
                of money? of course the restaurant here even though the rating is high but
                the price is affordable.
            </p>
            <div class="jumbotron__overlay">
        </div>
        </div>
    </section>
    <!-- End Jumbotron -->
    <!-- RestaurantList -->
    <section id="restaurant">
        <h1 tabindex="0">Restaurant list</h1>
        <p tabindex="0">
            The following is a list of recommended favorite restaurants in Indonesia with
            high ratings.
        </p>
        <!-- Restaurant List -->
        <section class="restaurant__list">
            <!-- End Restaurant List -->
        </section>
    </section>
    <!-- End RestaurantList -->
  
          `;
  },
  async afterRender() {
    const restaurantList = document.querySelector('.restaurant__list');
    const resto = await RestaurantDb.favoriteResto();

    resto.forEach((restos) => {
      restaurantList.innerHTML += createItemResto(restos);
    });
  },
};
export default Index;
