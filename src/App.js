import React, { useState, useEffect }  from 'react';
import { StyledApp, StyledAppHeader } from '../src/styled/styled';

import Layout from '../src/components/layout/Layout';
import Input from '../src/components/input/Input';

function App() {
  let maxSize = 100;
  const [arraySize, setArraySize] = useState(10);
  useEffect(() => {
  }, [arraySize]);

  const [barArray, setBarArray] = useState(() => {
      let array = [];

      for (let i = 0; i < arraySize; i++) {
          array.push(i);
      }

      return array;
  });
  useEffect(() => {
      setBarArray(() => {
          let array = [];

          for (let i = 0; i < arraySize; i++) {
              array.push(i);
          }

          return array;
      });
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
      <Layout barArray={barArray} arraySize={arraySize} />
    </StyledApp>
  );
}

export default App;
