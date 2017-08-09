import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  select: {
    flex: '1',
    textAlign: 'center',
    fontSize: '14px',
    height: '30px',
    border: '1px',
    display: 'block',
    margin: '0 auto 10px'
  }
};

const propTypes = {
  stations: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onTrainSelect: PropTypes.func.isRequired
};

const SelectBox = props => {
  return (
    <select style={styles.select} defaultValue={props.defaultValue} onChange={props.onTrainSelect}>
      {
        props.stations
      }
    </select>
  );
};

SelectBox.propTypes = propTypes;

export default SelectBox;

