import React, { useState, useEffect } from 'react';

const UseHook = () => {
  const [name, setName] = useState(void 0);

  useEffect(() => {
    setName('useState and useEffect');
  }, []);

  return <span>{name}</span>;
};

export default UseHook;
