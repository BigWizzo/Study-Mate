import React from 'react';
import { Link } from 'react-router-dom';

const ClockingListItem = ({ clocking }) => {
  const { id, topic } = clocking;

  return (
    <div>
      <Link to={`/clockings/${id}`}>{topic}</Link>
    </div>
  );
};

export default ClockingListItem;
