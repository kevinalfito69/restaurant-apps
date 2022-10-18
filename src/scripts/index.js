import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

const ratting = (rating) => {
    if (rating >= 1 && rating < 2) {
        return "⭐";
    } else if (rating >= 2 && rating < 3) {
        return "⭐⭐";
    } else if (rating >= 3 && rating < 4) {
        return "⭐⭐⭐";
    } else if (rating >= 4 && rating < 5) {
        return "⭐⭐⭐⭐";
    } else if (rating == 5) {
        return "⭐⭐⭐⭐⭐";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__menu");

    const main = document.querySelector("main");

    // hamburger event
    hamburger.addEventListener("click", (e) => {
        navMenu.classList.toggle("open");
        e.stopPropagation();
    });
    // main event
    main.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
    const restaurantList = document.querySelector(".restaurant__list");
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
            <p tabindex="0" class="restaurant__item__title">${resto.name}</p>
            <p class="restaurant__item__rating" tabindex="0">
                Rating : ${ratting(resto.rating)} <span>${resto.rating}</span> 
            </p>
            <p tabindex="0" class="restaurant__item__desc">
              ${resto.description}
            </p>
        </div>
        <p tabindex="0" href="#" class="restaurant__item__city">${
            resto.city
        }</p>
    </article>
    `;
    });
});
console.log("Hello Coders! :)");
