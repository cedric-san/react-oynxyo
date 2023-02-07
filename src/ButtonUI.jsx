import React from 'react';

const ButtonUI = ({ btn }) => {
  console.log('ac', btn[0]['followHandler']);
  const updateBtn = btn.map((text, idx) => {
    return (
      <button onClick={text.followHandler} key={idx}>
        {text.text}
      </button>
    );
  });

  return updateBtn;
};

export default ButtonUI;
