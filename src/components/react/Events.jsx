import React from 'react';

const Events = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = () => {
    console.log('you clicked me!');
  };

  return (
    <>
      <input placeholder="see console" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </>
  );
};

export default Events;
