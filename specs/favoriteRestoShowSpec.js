import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/globals/favorite-resto-idb';

describe('Showing all favorite resto', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getFavoriteRestoTemplate();
  };
  beforeEach(() => {
    renderTemplate();
  });
  describe('When no resto have been liked', () => {
    it('should render the information that no restaurant have been liked', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestaurantIdb);
      const presenter = new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
      const restos = [];
      presenter._displayResto(restos);
      expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);
    });
    it('should ask for the favorite resto', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestaurantIdb);
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });
  });
  describe('When favorite resto exist', () => {
    it('should show the resto', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.restaurant__item').length).toEqual(2);
        done();
      });
      const favoriteResto = spyOnAllFunctions(FavoriteRestaurantIdb, false);
      favoriteResto.getAllResto.and.returnValues([
        {
          id: 11,
          title: 'A',
          vote_average: 3,
          overview: 'Sebuah resto A',
        },
        {
          id: 22,
          title: 'B',
          vote_average: 4,
          overview: 'Sebuah resto B',
        },
      ]);
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
