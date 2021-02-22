import React, { useState } from 'react';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';

const App = () => {
  const [valueA, setValueA] = useState();
  const [valueC, setValueC] = useState();

  return (
    <div className="App">
      <p>C value: {valueC}</p>
      <ComponentA setValue={setValueA} />
      <ComponentB value={valueA*2} setValueC={value => setValueC(value)} />
    </div>
  );
}

export default App;
