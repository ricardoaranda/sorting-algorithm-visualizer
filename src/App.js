import React, { useState, useEffect }  from 'react';
import { StyledApp, StyledAppHeader } from '../src/styled/styled';

import Layout from '../src/components/layout/Layout';
import Input from '../src/components/input/Input';
import { BarContext } from './context/BarContext';

function App() {
  /*
  * state and effects
  */
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

  /*
  * handler functions 
  * shuffle, bubble sort
  */

  const newInputHandler = (event) => {
      let input = event.target.value;
      setArraySize(() => input);
  }

  const shuffleHandler = () => {
    setBarArray(() => {
      for (let i = barArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [barArray[i], barArray[j]] = [barArray[j], barArray[i]];
      }
      return [...barArray];
    });
  }

  const swap = (arr, firstIndex, secondIndex) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
        setBarArray(() => [...arr]);
        resolve(arr);
      }, 10);
    });
  }

  let j = 0;
  const bubbleSort = async () => {
    let len = barArray.length, i, stop;
      for (i=0; i < len; i++) {
        for (j=0, stop=len-i; j < stop; j++) {
          if (barArray[j] > barArray[j+1]) {
            try {
              await swap(barArray, j, j+1);
            }
            catch(e) {
              console.log("error swapping?", e);
            }
          }
        }
      }
  }
  
  return (
    <StyledApp>
      <StyledAppHeader>
        <Input arraySize={arraySize} handler={newInputHandler} maxSize={maxSize} />
        <button onClick={shuffleHandler}>Shuffle</button>
        <button onClick={bubbleSort}>Sort</button>
      </StyledAppHeader>
      <BarContext.Provider value={j}>
        <Layout barArray={barArray} arraySize={arraySize} />
      </BarContext.Provider>
    </StyledApp>
  );
}

export default App;
