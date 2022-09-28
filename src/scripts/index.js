import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../DATA.json";

document.addEventListener("DOMContentLoaded", () => {
  const restaurantList = document.querySelector(".restaurant__list");
  data.restaurants.forEach((resto) => {
    restaurantList.innerHTML += `
       <p> ${resto.id} </p>
    `;
  });
});
console.log("Hello Coders! :)");
