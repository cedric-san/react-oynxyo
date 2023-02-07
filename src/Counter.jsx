import React, { useState, memo, useMemo, useCallback } from 'react';

const Counter = ({ value, children }) => {
  
  console.log('Render: ', children);
  const [name, setName] = useState('sankar');
  const memoHandler = useMemo(() => {
    return 'Foo is just food with D';
  }, []);

  const callbackHandler = useCallback(() => {
    return 'foo is just food -- callback';
  }, []);
  console.log('memo --- ', memoHandler);
  console.log(' callback ', callbackHandler);
  return (
    <div>
      {children} : {value}
      <h3>{name}</h3>
    </div>
  );
};

export default Counter;
