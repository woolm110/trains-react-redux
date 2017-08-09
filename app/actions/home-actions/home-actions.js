import { push } from 'react-router-redux';
import actionNames from 'actions/action.constants';
import StationsFactory from 'shared/factories/stations-factory/stations-factory';

/**
 * Action for receiving response from pagehome
 * @param response
 * @returns {{type: string, stations: Object}}
 */
function receiveStations (response) {
  return {
    type: actionNames.RECEIVE_STATIONS,
    stations: response.data.stations
  };
}

/**
 * Request PageHome action
 * @returns {{type: string}}
 */
function requestStations () {
  return {
    type: actionNames.REQUEST_STATIONS
  };
}

/**
 * Async action creator for getting pagehome data
 * @returns {function}
 */
export function fetchStations () {
  return dispatch => {
    dispatch(requestStations());

    return StationsFactory.getStations()
      .then(response => dispatch(receiveStations(response)))
  };
}

