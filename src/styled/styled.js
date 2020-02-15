import styled from 'styled-components';

const headerHeight = '55px';

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
    /* border: 2px red solid; */
    /* width: 1500px; */
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
    padding: 15px 0px;
`;
