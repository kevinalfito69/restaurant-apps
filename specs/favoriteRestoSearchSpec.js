import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/globals/favorite-resto-idb';

describe('Searching restaurants', () => {
  let presenter;
  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
    <div id="resto-search-container">
      <input id="query" type="text">
      <div class="resto-result-container">
        <ul class="resto">
        </ul>
      </div>
    </div>
  `;
  };
  const constructPresenter = () => {
    spyOn(FavoriteRestaurantIdb, 'searchResto');
    presenter = new FavoriteRestoSearchPresenter({ favoriteResto: FavoriteRestaurantIdb });
  };
  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchResto('resto a');
    expect(presenter.latestQuery).toEqual('resto a');
  });
  it('should ask the model to search for liked resto', () => {
    searchResto('resto a');
    expect(FavoriteRestaurantIdb.searchResto).toHaveBeenCalledWith('resto a');
  });
  it('should show the found resto', () => {
    presenter._showFoundResto([{ id: 1, title: 'Satu' }]);
    console.log(document.querySelector('.resto'));
    expect(document.querySelectorAll('.restos__title').item(0).textContent).toEqual('Satu');
    presenter._showFoundResto([
      { id: 1, title: 'Satu' },
      { id: 2, title: 'Dua' },
    ]);
    const restoTitle = document.querySelectorAll('.restos__title');
    expect(restoTitle.item(0).textContent).toEqual('Satu');
    expect(restoTitle.item(1).textContent).toEqual('Dua');
  });
  it('should show - for found movie without title', () => {
    presenter._showFoundResto([{ id: 1 }]);
    expect(document.querySelectorAll('.restos__title').item(0).textContent).toEqual('-');
  });
});
