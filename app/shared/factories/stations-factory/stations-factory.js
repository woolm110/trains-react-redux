import ApiService from 'shared/services/api-service/api-service';
import AppConstants from 'app.constants';

export default class StationsFactory {
  /**
   * Get a list of stations based on a co-ordinates
   * @returns {Promise}
   */
  static getStations () {
    return ApiService.get(
      `//transportapi.com/v3/uk/train/stations/bbox.json?app_id=${AppConstants.appId}&app_key=${AppConstants.appKey}&minlon=-${AppConstants.minLon}&minlat=${AppConstants.minLat}&maxlon=${AppConstants.maxLon}&maxlat=${AppConstants.maxLat}`
    );
  }
}
