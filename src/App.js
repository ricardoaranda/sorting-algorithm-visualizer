import React, { useState, useEffect }  from 'react';
import { StyledApp, StyledAppHeader } from '../src/styled/styled';

import Layout from '../src/components/layout/Layout';
import Input from '../src/components/input/Input';

function App() {
  let maxSize = 100;
  const [arraySize, setArraySize] = useState(10);
  useEffect(() => {
  }, [arraySize]);

  let newInputHandler = (event) => {
      let input = event.target.value;
      setArraySize(() => input);
  }

  let randomizeHandler = (event) => {
    console.log('CLICK');
  }
  
  return (
    <StyledApp>
      <StyledAppHeader>
        <Input arraySize={arraySize} handler={newInputHandler} maxSize={maxSize} />
        <button onClick={randomizeHandler}>Randomize</button>
      </StyledAppHeader>
      <Layout arraySize={arraySize} />
    </StyledApp>
  );
}

export default App;
