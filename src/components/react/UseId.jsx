import React, { useId } from 'react';
import Props from './Props';

const UseId = () => {
  const list = ['First', 'Second', 'Third'];
  return list.map((item) => {
    const id = useId();
    return <Props key={id} text={item}></Props>;
  });
};

export default UseId;
