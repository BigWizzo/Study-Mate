import React from 'react';

const StudentLogout = () => (
  <div onClick={() => localStorage.clear()}>Logout</div>
);

export default StudentLogout;
