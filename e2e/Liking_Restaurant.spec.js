const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#query');

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.restaurant__item__title');
  const firstResto = locate('.restaurant__item__title').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const likedRestoName = await I.grabTextFrom('.restaurant__item__title');
  assert.strictEqual(firstRestoName, likedRestoName);
});
Scenario('searching resto', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.restaurant__item__title');
  const name = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__item__title').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    name.push(await I.grabTextFrom('.restaurant__detail__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');
  const searchQuery = name[1].substring(1, 3);
  const matchingResto = name.filter((names) => names.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.restaurant__item');
  assert.strictEqual(matchingResto.length, visibleLikedResto);

  matchingResto.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant__item__title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
