import React from 'react';
import { StyledSelect, StyledFormControl } from '../../styled/styled';
import { StylesProvider } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

function Input(props) {
    let optionArray = () => {
        let option = new Array(props.arraySize);

        for (let i = 10; i < props.maxSize + 1; i += 10) {
            option.push(<MenuItem value={i} key={i}>{i}</MenuItem>);
        }

        return option;
    }

    return (
        <StylesProvider injectFirst={true}>
            <StyledFormControl variant="outlined" size="small">    
                <StyledSelect 
                type="number" 
                onChange={props.handler} 
                value={props.arraySize} 
                disabled={props.disabled}>
                    {optionArray()}
                </StyledSelect>
            </StyledFormControl>
        </StylesProvider>
    );
}

export default Input;
