import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/globals/favorite-resto-idb';
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';

describe('Searching resto', () => {
  let presenter;
  let favoriteResto;
  let view;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteResto = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchResto('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for resto', () => {
      searchResto('resto a');

      expect(favoriteResto.searchResto).toHaveBeenCalledWith('resto a');
    });

    it('should show the title of the found resto', () => {
      presenter._showFoundResto([
        {
          id: 1,
          title: 'Satu',
        },
      ]);
      expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');

      presenter._showFoundResto([
        {
          id: 1,
          title: 'Satu',
        },
        {
          id: 2,
          title: 'Dua',
        },
      ]);

      const restoTitles = document.querySelectorAll('.resto__title');
      expect(restoTitles.item(0).textContent).toEqual('Satu');
      expect(restoTitles.item(1).textContent).toEqual('Dua');
    });

    it('should show the resto found by Favorite resto', (done) => {
      document
        .getElementById('resto-search-container')
        .addEventListener('restos:searched:updated', () => {
          expect(document.querySelectorAll('.resto').length).toEqual(3);
          done();
        });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        {
          id: 111,
          title: 'resto abc',
        },
        {
          id: 222,
          title: 'ada juga resto abcde',
        },
        {
          id: 333,
          title: 'ini juga boleh resto a',
        },
      ]);

      searchResto('resto a');
    });

    it('should show the name of the resto found by Favorite Resto', (done) => {
      document
        .getElementById('resto-search-container')
        .addEventListener('restos:searched:updated', () => {
          const restoTitles = document.querySelectorAll('.resto__title');
          expect(restoTitles.item(0).textContent).toEqual('resto abc');
          expect(restoTitles.item(1).textContent).toEqual('ada juga resto abcde');
          expect(restoTitles.item(2).textContent).toEqual('ini juga boleh resto a');

          done();
        });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        {
          id: 111,
          title: 'resto abc',
        },
        {
          id: 222,
          title: 'ada juga resto abcde',
        },
        {
          id: 333,
          title: 'ini juga boleh resto a',
        },
      ]);

      searchResto('resto a');
    });
    it('should show - when the resto returned does not contain a title', (done) => {
      document
        .getElementById('resto-search-container')
        .addEventListener('restos:searched:updated', () => {
          const restoTitles = document.querySelectorAll('.resto__title');
          expect(restoTitles.item(0).textContent).toEqual('-');

          done();
        });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([{ id: 444 }]);

      searchResto('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchResto(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite resto', () => {
      searchResto('    ');

      expect(favoriteResto.getAllResto).toHaveBeenCalled();
    });
  });
  describe('When no favorite restaurant could be found', () => {
    it('should show the empty message', (done) => {
      document
        .getElementById('resto-search-container')
        .addEventListener('restos:searched:updated', () => {
          expect(document.querySelectorAll('.resto__not__found').length).toEqual(1);
          done();
        });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });

    it('should not show any resto', (done) => {
      document
        .getElementById('resto-search-container')
        .addEventListener('restos:searched:updated', () => {
          expect(document.querySelectorAll('.resto').length).toEqual(0);
          done();
        });
      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);
      searchResto('resto a');
    });
  });
});
