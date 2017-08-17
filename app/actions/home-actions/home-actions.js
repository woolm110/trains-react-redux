import actionNames from '../action.constants';
import StationsFactory from '../../shared/factories/stations-factory/stations-factory';

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
 * Action for receiving response from timetable
 * @param response
 * @returns {{type: string, stations: Object}}
 */
function receiveTimetable (response) {
  return {
    type: actionNames.RECEIVE_TIMETABLE,
    timetable: response.data
  };
}

/**
 * Request timetable action
 * @returns {{type: string}}
 */
function requestTimetable () {
  return {
    type: actionNames.REQUEST_TIMETABLE
  };
}

/**
 * Action for setting departure station
 * @param station
 */
function setDepartureStation (station) {
  return {
    type: actionNames.SET_DEPARTURE_STATION,
    departureStation: station
  };
}

/**
 * Action for setting arrival station
 * @param station
 */
function setArrivalStation (station) {
  return {
    type: actionNames.SET_ARRIVAL_STATION,
    arrivalStation: station
  };
}

/**
 * Async action creator for getting pagehome data
 * @returns {function}
 */
export function fetchStations () {
  return async dispatch => {
    dispatch(requestStations());

    const response = await StationsFactory.getStations();
    dispatch(receiveStations(response));
  };
}

/**
 * Async action creator for setting departure station
 * @returns {function}
 */
export function setDeparture (departureStationCode) {
  return dispatch => {
    dispatch(setDepartureStation(departureStationCode));
  };
}

/**
 * Async action creator for setting departure station
 * @returns {function}
 */
export function setArrival (arrivalStationCode) {
  return dispatch => {
    dispatch(setArrivalStation(arrivalStationCode));
  };
}

/**
 * Async action creator for getting pagehome data
 * @returns {function}
 */
export function fetchTrainTimetable (departureStation, arrivalStation) {
  return async dispatch => {
    dispatch(requestTimetable());

    const response = await StationsFactory.getTrainTimetable(departureStation, arrivalStation);
    dispatch(receiveTimetable(response));
  };
}
