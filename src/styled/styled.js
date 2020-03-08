import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const headerHeight = '55px';
const enabledColor = 'rgb(212,212,212)';
const disabledColor = 'rgb(95,95,95) !important';
const disabledBorder = '1px solid rgb(95,95,95)';

export const StyledApp = styled.div `
    position: relative;
    text-align: center;
    background-color: rgb(30, 30, 30);
    height: 100%;
    color: rgb(212, 212, 212);
`;

export const StyledAppHeader = styled.div `
    display: block;
    height: ${headerHeight};
`;

export const StyledLayout = styled.div `
    display: block;
    height: 800px;
    margin: 0 auto;
`;

export const StyledBars = styled.div `
    display: flex;
    /* border: 2px blue solid; */
    height: 100%;
    justify-content: center;
    align-items: stretch;
`;

export const StyledBar = styled.div `
    display: inline-block;
    background-color: rgb(196, 133, 191);
    color: rgb(212, 212, 212);
    margin: 0 2px;
    width: 10px;
`;

export const StyledInput = styled.div `
    display: inline-block;
    padding: 0px 0px;
`;

export const StyledButton = styled(Button) `
    margin: 11px 5px;

    color: ${props => props.disabled ? disabledColor : enabledColor};
    border-color: ${props => props.disabled ? disabledColor : enabledColor};
    transition: color 0.3s linear;
    -webkit-transition: color 0.3s linear;
    -moz-transition: color 0.3s linear;
    &:hover {
        color: rgb(255,255,255);
    }
`;

export const SortButton = styled(StyledButton) ` 
    color: rgb(146,193,125);
    border-color: rgb(146,193,125);
    &:hover {
        color: rgb(176,223,155);
    }
`;

export const StopButton = styled(StyledButton) `
    color: rgb(237,101,90);
    border-color: rgb(237,101,90);
    &:hover {
        color: rgb(267,131,120);
    }
`;

export const StyledSelect = styled(Select) `
    margin: 11px 5px;
    padding: 0px 0px;
    height: 30px;

    color: ${props => props.disabled ? disabledColor : enabledColor};
    border: ${props => props.disabled ? disabledBorder : '1px solid rgb(212,212,212)'};
    transition: color 0.3s linear;
    -webkit-transition: color 0.3s linear;
    -moz-transition: color 0.3s linear;
    &:hover {
        color: rgb(255,255,255);
    }
`;

export const StyledFormControl = styled(FormControl) `
    /* margin: 11px 5px; */
`;