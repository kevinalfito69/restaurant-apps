import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';
import App from './views/app';

const ratting = (rating) => {
  const star = '⭐';
  return star.repeat(rating);
};
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const app = new App({
    button: document.querySelector('.hamburger'),
    drawer: document.querySelector('.nav__menu'),
    content: document.querySelector('main'),
  });
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  window.addEventListener('load', () => {
    app.renderPage();
  });

  const restaurantList = document.querySelector('.restaurant__list');
  data.restaurants.forEach((resto) => {
    restaurantList.innerHTML += `
        <article class="restaurant__item" data-id="blablabla">
        <div class="restaurant__item__img">
            <img tabindex="0"
                alt="gambar ${resto.name}"
                src="${resto.pictureId}"
            />
        </div>
        <div class="restaurant__item__detail" data-id=${resto.id}>
            <a href='/#/detail' tabindex="0" class="restaurant__item__title">${resto.name}</a>
            <p class="restaurant__item__rating" tabindex="0">
                Rating : ${ratting(resto.rating)} <span>${resto.rating}</span> 
            </p>
            <p tabindex="0" class="restaurant__item__desc">
              ${resto.description}
            </p>
        </div>
        <p tabindex="0" href="#" class="restaurant__item__city">${resto.city}</p>
    </article>
    `;
  });
});
