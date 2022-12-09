import LikeButtonInititator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/globals/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInititator.init({
    LikeContainer: document.querySelector('#LikeContainer'),
    favoriteRestos: FavoriteRestaurantIdb,
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
