import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as homeActions from './home-actions';
import fixture from './home-actions.fixture';
import SetsFactory from '../../shared/factories/set-factory/set-factory';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('home Actions', () => {
    beforeEach(() => {
      SetsFactory.getHomepage = jest.fn().mockReturnValue(
        new Promise(resolve => {
          resolve(fixture.response);
        })
      );
    });

    describe('Fetch home', () => {
      it('should fire Request and Receive data', () => {
        const store = mockStore({ home: {} });

        return store.dispatch(homeActions.fetchHome()).then(() => {
          expect(store.getActions()).toEqual(fixture.expectedActions);
        });
      });
    });
  });
});
