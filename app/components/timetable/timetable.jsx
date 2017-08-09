import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  columnsContainer: {
    display: 'flex'
  },
  column: {
    flex: '1',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
    minHeight: '50px'
  },
  resultsWrapper: {
    marginTop: '40px'
  }
};

const propTypes = {
  trains: PropTypes.array.isRequired
};

const Timetable = props => (
  <div style={styles.resultsWrapper}>
    {
      props.trains.length ? props.trains.map(train => (
        <div style={styles.columnsContainer} key={train.train_uid}>
          <div style={styles.column}>{train.destination_name}</div>
          <div style={styles.column}>{train.aimed_departure_time}</div>
          <div style={styles.column}>{train.platform}</div>
        </div>
      )) : 'No trains found.'
    }
  </div>
);

Timetable.propTypes = propTypes;

export default Timetable;

