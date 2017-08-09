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

const propTypes = {
  fetchStations: PropTypes.func.isRequired,
  home: PropTypes.shape({
    stations: PropTypes.obj
  }).isRequired
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
  }

  /**
   * renderStationsList
   * @return {DOM Node}
   */
  renderStationsList () {
    return (
      _.map(
        _.sortBy(this.props.home.stations, 'name'),
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
      <div>
        { this.props.home.stations ?
          <div>
            <SelectBox defaultValue="WAT" stations={this.renderStationsList()} />
            <SelectBox defaultValue="QRB" stations={this.renderStationsList()} />
          </div> :
          <Loader />
        }
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

