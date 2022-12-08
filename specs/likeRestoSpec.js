import LikeButtonInititator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/globals/favorite-resto-idb';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="LikeContainer"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('should show the unlike button when the resto has not been liked before', async () => {
    await LikeButtonInititator.init({
      LikeContainer: document.querySelector('#LikeContainer'),
      resto: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });
  it('should be able to like Resto', async () => {
    await LikeButtonInititator.init({
      LikeContainer: document.querySelector('#LikeContainer'),
      resto: {
        id: 1,
      },
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestaurantIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });
    FavoriteRestaurantIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await LikeButtonInititator.init({
      likeButtonContainer: document.querySelector('#LikeContainer'),
      resto: {
        id: 1,
      },
    });
    await FavoriteRestaurantIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteResto(1);
  });
});
