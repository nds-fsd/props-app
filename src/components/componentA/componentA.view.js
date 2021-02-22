import React from 'react';

const ComponentA = ({ setValue }) => (
  <>
    <p>A</p>
    <input onChange={e => setValue(e.target.value)} type="number" />
  </>
);

export default ComponentA;
