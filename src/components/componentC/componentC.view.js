import React from 'react';

const ComponentA = ({ setValueC }) => (
  <>
    <p>C</p>
    <input onChange={e => setValueC(e.target.value)} type="text" />
  </>
);

export default ComponentA;
