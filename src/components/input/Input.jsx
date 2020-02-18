import React from 'react';
import {StyledInput} from '../../styled/styled';

function Input(props) {
    let optionArray = () => {
        let option = new Array(props.arraySize);

        for (let i = 10; i < props.maxSize + 1; i += 10) {
            option.push(<option value={i} key={i}>{i}</option>);
        }

        return option;
    }

    return (
        <StyledInput>
            <select type="number" onChange={props.handler} value={props.arraySize} disabled={props.disabled}>
                {optionArray()}
            </select>
        </StyledInput>
    );
}

export default Input;
