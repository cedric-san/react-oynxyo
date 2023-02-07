import React, { useState } from 'react';
import './style.css';
import Counter from './Counter';
import Cal from './Cal';
import BirthdayCom from './BirthdayCom';
import DialogCom from './DialogCom';
import Bio from './Bio';
import InputCom from './InputCom';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [dialog, setDialog] = useState([
    { number: 87, title: 'posts' },
    { number: 59, title: 'followers' },
    { number: 165, title: 'following' },
  ]);
  const [biostatus, setBiostatus] = useState([
    'Mr.sankar',
    'San diego wife, Momma, Grateful',
    ' Glad you are here',
    'www.interiordesign.com',
    'follow me on LTK to shop! Click jink below',
    'www.liketoknow.it/interiordesignerella',
  ]);

  const increaseCounter1 = (e) => {
    setCount1((count1) => count1 + 1);
  };
  const resetCounter1 = () => {
    setCount1((count) => (count = 0));
  };

  const removeBio = () => {
    const updateStatus = biostatus.filter(
      (item, idx) => idx != biostatus.length - 1
    );
    console.log(updateStatus);
    setBiostatus(updateStatus);
  };

  return (
    <div>
      <InputCom />
      <button>Add</button>
      <DialogCom data={dialog} />
      <Bio bio={biostatus} removeBio={removeBio} />
      <BirthdayCom name="sankar" dob="12-11-1992" />
      <Cal>
        <form>
          <input type="text" />
          <button>Send</button>
        </form>
      </Cal>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={increaseCounter1}>Increase</button>
      <button onClick={resetCounter1}>Reset</button>
      <Counter value={count1}>Counter 1</Counter>
      <Counter value={count2}>Counter 2</Counter>
    </div>
  );
}
