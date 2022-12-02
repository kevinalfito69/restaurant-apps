import CONFIG from '../../globals/config';

const ratting = (rating) => {
  const star = '⭐';
  return star.repeat(rating);
};
const createItemResto = (resto) => `
<article class="restaurant__item"  tabindex="0" >
<div class="restaurant__item__img">
    <img tabindex="0"
        alt="gambar ${resto.name}"
        src="${CONFIG.SMALL_IMG_URL}${resto.pictureId}"
        loading="lazy"
    />
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
  
            <img
                tabindex="0"
                class="restaurant__detail__img"
                src="${CONFIG.MEDIUM_IMG_URL}${resto.pictureId}"
                alt="${resto.name}"
            />
            <section class="restaurant__detail__section" tabindex="0" id="#main">
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
                <h1 tabindex="0" >${resto.name}</h1>
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
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M1 21h15.01v.98c0 .56-.45 1.01-1.01 1.01H2.01c-.56 0-1.01-.45-1.01-1.01V21zm19.49 2.31L16 18.83V19H1v-2h13.17l-2-2H1c0-3.24 2.46-5.17 5.38-5.79l-5.7-5.7L2.1 2.1 13 13l2 2 6.9 6.9-1.41 1.41zM10.17 13l-2-2c-1.42.06-3.52.56-4.55 2h6.55zM23 5h-5V1h-2v4h-5l.23 2h9.56l-1 9.97 1.83 1.83L23 5z"
                            ></path>
                        </svg>
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
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createItemResto, createDetailResto, createLikeButtonTemplate, createLikedButtonTemplate,
};
