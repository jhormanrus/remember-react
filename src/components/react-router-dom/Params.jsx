import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
  let params = useParams();
  return JSON.stringify(params);
};

export default Params;
