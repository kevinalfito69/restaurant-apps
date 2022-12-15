import LikeButtonInititator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/globals/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="LikeContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putResto({ id: 1 });
  });
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteResto(1);
  });
  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label = "unlike this resto"]')).toBeTruthy();
  });
  it('should not display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label = "like the resto"]')).toBeFalsy();
  });
  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
  });
});
