import CONFIG from '../../globals/config';

const ratting = (rating) => {
  const star = '⭐';
  return star.repeat(rating);
};
const createItemResto = (resto) => `
<article class="restaurant__item" data-id="blablabla">
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
<p>${resto.id}</p>
`;
export default { createItemResto, createDetailResto };
