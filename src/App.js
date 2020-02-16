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

  const [isRunning, setIsRunning] = useState('hard-stop');
  useEffect(() => {
    if (isRunning) {
      bubbleSort();
    }
  }, [isRunning]);

  /*
  * handler functions:
  * shuffle, bubble sort
  */
  const newInputHandler = (event) => {
    let input = event.target.value;
    setArraySize(() => input);
  }

  const shuffle = () => {
    setBarArray(() => {
      for (let i = barArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [barArray[i], barArray[j]] = [barArray[j], barArray[i]];
      }
      return [...barArray];
    });
  }

  let millisecords = 10;

  const swap = (arr, firstIndex, secondIndex) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
        setBarArray(() => [...arr]);
        resolve(arr);
      }, millisecords);
    });
  }

  const next = (arr) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setBarArray([...arr]);
        resolve(arr);
      }, millisecords);
    });
  }

  let [barIndex, setBarIndex] = useState(null);
  const bubbleSort = async () => {
    let len = barArray.length, i, stop;
      for (i=0; i < len; i++) {
        for (barIndex = 0, stop = len - i; barIndex < stop; barIndex++) {
          if(!isRunning) {
            return;
          }
          // color selected element
          setBarIndex(() => barIndex);
          // swap 
          if (barArray[barIndex] > barArray[barIndex+1]) {
            try {
              await swap(barArray, barIndex, barIndex+1);
            }
            catch(e) {
              console.log("error swapping?", e);
            }
          }
          else {
            try {
              await next(barArray);
            }
            catch(e) {
              console.log(e);
            }
          }
        }
      }
      setBarIndex(null);
      setIsRunning(false);
  }

  const sortHandler = () => {
    setIsRunning(true);
  }
  
  return (
    <StyledApp>
      <StyledAppHeader>
        <Input arraySize={arraySize} handler={newInputHandler} maxSize={maxSize} />
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={sortHandler}>Sort</button>
      </StyledAppHeader>
      <BarContext.Provider value={barIndex}>
        <Layout barArray={barArray} arraySize={arraySize} />
      </BarContext.Provider>
    </StyledApp>
  );
}

export default App;
