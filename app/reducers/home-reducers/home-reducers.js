import actionNames from '../../actions/action.constants';

/**
 * Reducer for updating the homepage
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} updated state
 */
export default function (state = {}, action) {
  switch (action.type) {
    case actionNames.REQUEST_STATIONS:
      return Object.assign({}, state, {
        isFetchingStations: true
      });
    case actionNames.RECEIVE_STATIONS:
      return Object.assign({}, state, {
        isFetchingStations: false,
        stations: action.stations
      });
    default:
      return state;
  }
}
