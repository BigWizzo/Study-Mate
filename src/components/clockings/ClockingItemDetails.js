import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClockingItemDetails = ({ clockings }) => {
  const { id } = useParams();

  const clocking = clockings.filter((c) => c.id === parseInt(id));

  const { details, duration, topic } = clocking[0];
  return (
    <div>
      <h1>Clocking</h1>
      <p>{topic}</p>
      <p>{duration}</p>
      <p>{details}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clockings: state.clockings.clocking,
});

export default connect(mapStateToProps)(ClockingItemDetails);
