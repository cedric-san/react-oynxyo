import React, { useState } from 'react';
import ButtonUI from './ButtonUI';
const Bio = (props) => {
  const [btnStatus, setButtonStatus] = useState({
    follow: 0,
    message: 0,
    email: 0,
  });
  const followHandler = (e) => {
    setButtonStatus((prevState) => {
      return { ...prevState, follow: prevState.follow + 1 };
    });
  };
  return (
    <div>
      {props.bio.map((bio) => {
        return <p>{bio}</p>;
      })}
      <button
        onClick={props.removeBio}
        disabled={props.bio.length == 0 ? true : false}
      >
        Remove last one
      </button>
      <p>
        {btnStatus.follow} -- {btnStatus.message} -- {btnStatus.email}
      </p>
      <br />
      <ButtonUI
        btn={[
          { text: 'Follow', followHandler },
          { text: 'Message' },
          { text: 'Email' },
        ]}
      />
    </div>
  );
};

export default Bio;
