import React from 'react';
import {StyledInput} from '../../styled/styled';

function Input(props) {
    let optionArray = () => {
        let option = new Array(props.arraySize);

        for (let i = 10; i < props.maxSize + 1; i++) {
            option.push(<option value={i} key={i}>{i}</option>);
        }

        return option;
    }

    return (
        <StyledInput>
            {/* Array Size: <input type="number" name="ArraySize" value={props.arraySize} onChange={props.handler} min="4" max="20" /> */}
            <select type="number" onChange={props.handler} value={props.arraySize}>
                {optionArray()}
            </select>
        </StyledInput>
    );
}

export default Input;
