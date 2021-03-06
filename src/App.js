import React, { useState, useEffect }  from 'react';
import { StyledApp, StyledAppHeader, StyledButton, SortButton, StopButton } from '../src/styled/styled';
import { StylesProvider } from '@material-ui/core/styles';

import Layout from '../src/components/layout/Layout';
import Input from '../src/components/input/Input';
import { BarContext } from './context/BarContext';

let isRunning = false;  // mutable global variable needs to be accessible by asyc function
function App() {
  /*
  * state and effects
  */
  let maxSize = 100;
  const [arraySize, setArraySize] = useState(50);
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
  * handler functions:
  * shuffle, bubble sort
  */
  const newInputHandler = (event) => {
    let input = event.target.value;
    setArraySize(() => input);
    isRunning = false;
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

  let millisecords = 15;

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
    if (isRunning) {
      return;
    }
    isRunning = true;
    let len = barArray.length, i, stop;
      for (i=0; i < len; i++) {
        for (barIndex = 0, stop = len - i; barIndex < stop; barIndex++) {
          if (!isRunning) {
            setBarIndex(null);
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
      isRunning = false;
      setBarIndex(null);
  }

  const stopHandler = () => {
    isRunning = false;
  }
  
  return (
    <StyledApp>
      <StyledAppHeader>
      <StylesProvider injectFirst={true}>
        <Input arraySize={arraySize} handler={newInputHandler} maxSize={maxSize} disabled={isRunning ? true : false}/>
        <StyledButton size="small" variant="outlined" onClick={shuffle} disabled={isRunning ? true : false}>Shuffle</StyledButton>
        <SortButton size="small" variant="outlined" onClick={bubbleSort}>Sort</SortButton>
        <StopButton size="small" variant="outlined" onClick={stopHandler}>Stop</StopButton>
      </StylesProvider>
      </StyledAppHeader>
      <BarContext.Provider value={barIndex}>
        <Layout barArray={barArray} arraySize={arraySize} />
      </BarContext.Provider>
    </StyledApp>
  );
}

export default App;
