const assert = require('assert');

Feature('Unliking Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__item__title');

  const firstRestaurant = locate('.restaurant__item__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.restaurant__item__title');
  I.click('.restaurant__item__title');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
