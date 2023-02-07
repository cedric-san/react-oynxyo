import React from 'react';

const DialogCom = ({ data }) => {
  return (
    <>
      <div className="dialog-com">
        {data.map((item) => {
          return (
            <div style={{ marginLeft: '20px' }}>
              <h3>{item.number}</h3>
              <h6>{item.title}</h6>
            </div>
          );
        })}
      </div>
      <button>Edit your profile</button>
    </>
  );
};

export default DialogCom;
