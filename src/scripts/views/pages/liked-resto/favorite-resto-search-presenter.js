class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchResto(event.target.value);
    });
  }

  _searchResto(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteResto.searchResto(this._latestQuery);
  }

  _showFoundResto(restos) {
    const html = restos.reduce(
      (carry, restos) => carry.concat(`<li class="restos">
    <span class="restos__title">${restos.title || '-'}</span>
    </li>`),
      '',
    );
    document.querySelector('.resto').innerHTML = html;
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
