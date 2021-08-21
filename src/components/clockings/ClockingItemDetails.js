import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClockingItemDetails = ({ clockings }) => {
  const { id } = useParams();

  console.log(clockings);
  console.log(id);
  debugger;
  const clocking = clockings.filter((clocking) => clocking.id === id);

  console.log(clocking);
  return (
    <div>
      <h1>Clocking</h1>
      <p>{clocking.topic}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clockings: state.clockings,
});

export default connect(mapStateToProps)(ClockingItemDetails);
