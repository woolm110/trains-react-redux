/**
 * Home container
 * This container component connects to the store and
 * maps props to its child presentational component.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as homeActions from 'actions/home-actions/home-actions';
import SelectBox from 'components/select-box/select-box';
import Loader from 'components/loader/loader';
import Timetable from 'components/timetable/timetable';

const propTypes = {
  fetchStations: PropTypes.func.isRequired,
  setDeparture: PropTypes.func.isRequired,
  setArrival: PropTypes.func.isRequired,
  fetchTrainTimetable: PropTypes.func.isRequired,
  home: PropTypes.shape({
    stations: PropTypes.obj,
    departureStation: PropTypes.string,
    arrivalStation: PropTypes.string,
    timetable: PropTypes.array
  }).isRequired
};

const styles = {
  button: {
    flex: '1',
    textAlign: 'center',
    fontSize: '14px',
    padding: '7px',
    maxWidth: '100px',
    margin: '5px 0',
    background: 'white',
    border: '1px',
    borderRadius: '3px',
    cursor: 'pointer'
  },
  alignCenter: {
    textAlign: 'center'
  }
};

const mapStateToProps = state => {
  const {
    home
  } = state;

  return {
    home
  };
};

/**
 * Add dispatches to the props
 * @param  {function} dispatch
 * @return {Object}
 */
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Object.assign(
    {},
    homeActions
  ), dispatch);
}

class PageHome extends Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor (props) {
    super(props);

    this.props.fetchStations();
    this.setDepartureStation = this.setDepartureStation.bind(this);
    this.setArrivalStation = this.setArrivalStation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * setDepartureStation
   */
  setDepartureStation (event) {
    this.props.setDeparture(event.target.value);
  }

  /**
   * setArrivalStation
   */
  setArrivalStation (event) {
    this.props.setArrival(event.target.value);
  }

  /**
   * handleSubmit
   * fetch timetable on submit
   */
  handleSubmit () {
    this.props.fetchTrainTimetable(this.props.home.departureStation, this.props.home.arrivalStation);
  }

  /**
   * renderStationsList
   * @return {DOM Node}
   */
  renderStationsList () {
    return (
      _.sortBy(this.props.home.stations, 'name').map(
        train => <option value={train.station_code} key={train.station_code}>{train.name}</option>
      )
    );
  }

  /**
   * React render
   * @returns {JSX}
   */
  render () {
    return (
      <div style={styles.alignCenter}>
        <div>
          { this.props.home.stations ?
            <div>
              <SelectBox defaultValue={this.props.home.departureStation} stations={this.renderStationsList()} onTrainSelect={this.setDepartureStation} />
              <SelectBox defaultValue={this.props.home.arrivalStation} stations={this.renderStationsList()} onTrainSelect={this.setArrivalStation} />
            </div> :
            <Loader />
          }
        </div>
        <div>
          <button style={styles.button} onClick={this.handleSubmit}>find trains</button>
        </div>
        <div>
          { this.props.home.timetable && <Timetable trains={this.props.home.timetable} /> }
        </div>
      </div>
    );
  }
}

PageHome.propTypes = propTypes;

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHome);

export default HomeContainer;

