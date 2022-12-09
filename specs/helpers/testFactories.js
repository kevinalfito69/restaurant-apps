import LikeButtonInititator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInititator.init({
    LikeContainer: document.querySelector('#LikeContainer'),
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
