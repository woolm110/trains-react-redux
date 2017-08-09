import homeReducers from './home-reducers';
import fixture from './home-reducers.fixture';

describe('Reducers', () => {
  describe('Home Reducers', () => {
    describe('REQUEST_HOME', () => {
      const action = {
        type: 'REQUEST_HOME'
      };

      it('should update set isFetchingSet on state to true when it has no value', () => {
        expect(homeReducers({}, action)).toEqual({
          isFetchingSet: true
        });
      });

      it('should update set isFetchingSet on state to true when it has a value of false', () => {
        expect(homeReducers({ isFetchingSet: false }, action)).toEqual({
          isFetchingSet: true
        });
      });
    });

    describe('RECEIVE_HOME', () => {
      const action = {
        type: 'RECEIVE_HOME',
        set: fixture.set
      };

      it('should set isFetchingSet on state to false', () => {
        expect(homeReducers({ isFetchingSet: true }, action)).toEqual({
          isFetchingSet: false,
          data: expect.any(Object)
        });
      });

      it('should set add set to state when there is no value', () => {
        expect(homeReducers({ isFetchingSet: true }, action)).toEqual({
          isFetchingSet: expect.any(Boolean),
          data: fixture.set
        });
      });

      it('should set update the set in state', () => {
        expect(homeReducers({ isFetchingSet: true, data: {} }, action)).toEqual({
          isFetchingSet: expect.any(Boolean),
          data: fixture.set
        });
      });
    });

    describe('default', () => {
      it('should return the state passed', () => {
        expect(homeReducers({}, 'AN_ACTION')).toEqual({});
      });

      it('should return an empty state object when no state is specified', () => {
        expect(homeReducers(undefined, 'AN_ACTION')).toEqual({});
      });
    });
  });
});
