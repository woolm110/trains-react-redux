import ApiService from 'shared/services/api-service/api-service';
import AppConstants from 'app.constants';

const endPointCredentials = `app_id=${AppConstants.appId}&app_key=${AppConstants.appKey}`;

export default class StationsFactory {
  /**
   * Get a list of stations based on a co-ordinates
   * @returns {Promise}
   */
  static getStations () {
    return ApiService.get(
      `//transportapi.com/v3/uk/train/stations/bbox.json?${endPointCredentials}&minlon=-${AppConstants.minLon}&minlat=${AppConstants.minLat}&maxlon=${AppConstants.maxLon}&maxlat=${AppConstants.maxLat}`
    );
  }

  /**
   * getTrainTimetable
   * @param  {String} departureStationCode
   * @param  {String} arrivalStationCode
   * @return {Object}
   */
  static getTrainTimetable (departureStationCode, arrivalStationCode) {
    return ApiService.get(
      `//transportapi.com/v3/uk/train/station/${departureStationCode}/live.json?${endPointCredentials}&calling_at=${arrivalStationCode}&train_status=passenger`
    );
  }
}
