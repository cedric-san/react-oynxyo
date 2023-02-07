import React from 'react';

const Cal = (props) => {
  //console.log(props.children);

  return (
    <div>
      <h3>Children Props</h3>
      {props.children}
    </div>
  );
};

export default Cal;
