import axios from 'axios';

export default class ApiService {
  /**
   * GET from api endpoint
   * @param {string} endpoint - the endpoint to request
   * @param {Object} config - any configuration parameters
   * @returns {Promise}
   */
  static get (endpoint, config = {}) {
    return axios.get(endpoint, config);
  }

  /**
   * POST to api endpoint
   * @param {string} endpoint - the endpoint to request
   * @param {Object} data - the data to send with the request
   * @param {Object} config - any configuration parameters
   * @returns {Promise}
   */
  static post (endpoint, data, config = {}) {
    return axios.post(endpoint, data, config);
  }

  /**
   * PUT to api endpoint
   * @param {string} endpoint - the endpoint to request
   * @param {Object} data - the data to send with the request
   * @param {Object} config - any configuration parameters
   * @returns {Promise}
   */
  static put (endpoint, data, config = {}) {
    return axios.put(endpoint, data, config);
  }

  /**
   * PATCH to api endpoint
   * @param {string} endpoint - the endpoint to request
   * @param {Object} data - the data to send with the request
   * @param {Object} config - any configuration parameters
   * @returns {Promise}
   */
  static patch (endpoint, data, config = {}) {
    return axios.patch(endpoint, data, config);
  }

  /**
   * DELETE from api endpoint
   * @param {string} endpoint - the endpoint to request
   * @returns {Promise}
   */
  static delete (endpoint) {
    return axios.delete(endpoint);
  }
}
