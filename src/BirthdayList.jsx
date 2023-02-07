import React from 'react';

const BirthdayList = (props) => {
  return (
    <div>
      <ul>
        <li>{props.data.name}</li>
        <li>{props.data.dob}</li>
      </ul>
    </div>
  );
};

export default BirthdayList;
