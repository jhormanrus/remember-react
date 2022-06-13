import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  });

  return (
    <>
      <span>child component</span>
      <div id="portal-container"></div>
      {domReady &&
        ReactDOM.createPortal(
          <span>parent component</span>,
          document.getElementById('portal-container')
        )}
    </>
  );
};

export default Portal;
