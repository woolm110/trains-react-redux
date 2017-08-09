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
    case actionNames.SET_DEPARTURE_STATION:
      return Object.assign({}, state, {
        departureStation: action.departureStation
      });
    case actionNames.SET_ARRIVAL_STATION:
      return Object.assign({}, state, {
        arrivalStation: action.arrivalStation
      });
    case actionNames.REQUEST_TIMETABLE:
      return Object.assign({}, state, {
        isFetchingTimetable: true
      });
    case actionNames.RECEIVE_TIMETABLE:
      return Object.assign({}, state, {
        isFetchingTimetable: false,
        timetable: action.timetable.departures.all
      });
    default:
      return state;
  }
}
