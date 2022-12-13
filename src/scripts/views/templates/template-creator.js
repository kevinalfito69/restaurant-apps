import CONFIG from '../../globals/config';

const ratting = (rating) => {
  const star = '⭐';
  return star.repeat(rating);
};
const createItemResto = (resto) => `
<article class="restaurant__item"  tabindex="0" >

<div class="restaurant__item__img">
<picture>
<source media="(max-width: 600px)" srcset="${CONFIG.SMALL_IMG_URL}${resto.pictureId}">
<img tabindex="0"  src="${CONFIG.MEDIUM_IMG_URL}${resto.pictureId}" 
alt="gambar ${resto.name}">
</picture>
    
</div>
<div class="restaurant__item__detail" data-id=${resto.id}>
    <a href='/#/detail/${resto.id}' tabindex="0" class="restaurant__item__title">${resto.name}</a>
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
const createDetailResto = (resto) => `
<picture  >
<source media="(max-width: 600px)" srcset="${CONFIG.SMALL_IMG_URL}${resto.pictureId}">
<img
tabindex="0"
class="restaurant__detail__img"
src="${CONFIG.LARGE_IMG_URL}${resto.pictureId}"
alt="${resto.name}"/>

</picture>
          
            <section class="restaurant__detail__section" tabindex="0" id="main">
                <a class='back' href="/"
                    ><svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"
                        ></path></svg
                ></a>
                <h1 tabindex="0" class="restaurant__detail__name">${resto.name}</h1>
                <div class="restaurant__detail__info" tabindex="0">
                    <div class="ratting">⭐ ${resto.rating}</div>
                    <div class="address" tabindex="0" >
                        <span> ${resto.city}</span>

                        ${resto.address}
                    </div>
                   
                </div>
                <h2>Description</h2>
                <p class="restaurant__detail__desc" tabindex="0">
                    ${resto.description}
                </p>
                <div class="restaurant__category__container">
                Categories:
                <p class="restaurant__detail__category">  ${resto.categories
    .map((element) => `${element.name}`)
    .join('')}</p>
    </div>
                <section class="restaurant__detail__menu">
                    <h2>
                        Menu
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"    
                        height="1em"
                        width="1em" ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
                        
                    </h2>
                    <div class="food">
                        <h3>Food</h3>
                        <ul>
                        ${resto.menus.foods.map((element) => `<li>${element.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="drink">
                        <h3>Drink</h3>
                        <ul>
                        ${resto.menus.drinks.map((element) => `<li>${element.name}</li>`).join('')}
                        </ul>
                    </div>
                </section>
                <hr />
                <h2>Review</h2>
                <section class="restaurant__detail__review">
                   
                    ${resto.customerReviews
    .map(
      (element) => ` <div>
                    <h3>${element.name}</h3>
                    <p class="body">${element.review}</p>
                    <p class="date">${element.date}</p>
                    </div>
                    `,
    )
    .join('')}
                       
                </section>
            </section>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createItemResto, createDetailResto, createLikeButtonTemplate, createLikedButtonTemplate,
};
