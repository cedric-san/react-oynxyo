import React, { useState } from 'react';

const InputCom = (props) => {
  const [inputs, setInputs] = useState([{ id: 1, text: 'sankar@gmail.com' }]);
  const [inputText, setInputText] = useState('sankar@gmail.com');
  const [format, setFormat] = useState(null);
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  const checkEvent = (text) => {
    if (/[^@]+@[^\.]+\..+/.test(text)) {
      console.log('Email OK');
      setFormat(true);
      let unique = inputs.filter((inp) => inp.text !== text);
      console.log('inputs-', unique);
    } else {
      setFormat(false);
    }
  };
  return (
    <div>
      {inputs.map((input) => {
        return (
          <input
            key={input.key}
            style={
              format
                ? { border: '2px solid green' }
                : { border: '2px solid red' }
            }
            type="text"
            value={inputText}
            onChange={changeHandler}
            onBlur={() => checkEvent(inputText)}
          />
        );
      })}
    </div>
  );
};

export default InputCom;
