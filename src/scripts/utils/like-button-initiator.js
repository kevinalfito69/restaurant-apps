import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInititator = {
  async init({ LikeContainer, resto, favoriteRestos }) {
    this._LikeContainer = LikeContainer;
    this._resto = resto;
    this._favoriteRestaurants = favoriteRestos;
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
    const resto = await this._favoriteRestaurants.getResto(id);
    return !!resto;
  },
  _renderLike() {
    this._LikeContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putResto(this._resto);
      this._renderButton();
    });
  },
  _renderLiked() {
    this._LikeContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};
export default LikeButtonInititator;
