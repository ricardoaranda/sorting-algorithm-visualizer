import React from 'react';
import {StyledInput, StyledSelect, StyledFormControl } from '../../styled/styled';
import { StylesProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

function Input(props) {
    let optionArray = () => {
        let option = new Array(props.arraySize);

        for (let i = 10; i < props.maxSize + 1; i += 10) {
            option.push(<option value={i} key={i}>{i}</option>);
        }

        return option;
    }

    return (
        <StylesProvider injectFirst>
            <StyledFormControl variant="outlined" size="small">    
                <StyledSelect type="number" onChange={props.handler} value={props.arraySize} disabled={props.disabled}>
                    {optionArray()}
                </StyledSelect>
            </StyledFormControl>
        </StylesProvider>
    );
}

export default Input;
