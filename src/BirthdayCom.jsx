import React from 'react';
import BirthdayList from './BirthdayList';
const BirthdayCom = (props) => {
  return (
    <div>
      <h2>Birthday Reminder</h2>
      <BirthdayList data={props} />
    </div>
  );
};

export default BirthdayCom;
