import FavoriteRestaurantIdb from '../globals/favorite-resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInititator = {
  async init({ LikeContainer, resto }) {
    this._LikeContainer = LikeContainer;
    this._resto = resto;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._resto;
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestoExist(id) {
    const resto = await FavoriteRestaurantIdb.getResto(id);
    return !!resto;
  },
  _renderLike() {
    this._LikeContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      console.log(this._resto);
      await FavoriteRestaurantIdb.putResto(this._resto);
      this._renderButton();
    });
  },
  _renderLiked() {
    this._LikeContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      console.log('liked');
      await FavoriteRestaurantIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};
export default LikeButtonInititator;
