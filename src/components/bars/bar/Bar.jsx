import React from 'react';
// import { StyledBar } from '../../../styles/styles';

function Bar(props) {
    function normalize(val, max, min) { 
        let a = 3;
        let b = 100;
        if(max - min === 0) return 1; 
        return min + (val - a) * (max - min) / (b - a); 
    }
    
    const style = {
        display: 'inline-block',
        backgroundColor: 'rgb(196, 133, 191)',
        color: 'rgb(212, 212, 212)',
        margin: '0 2px',
        width: '10px',
        height: `${normalize(props.number, 800, 50)}px`
      };
      
    return (
        <div style={style}></div>
    );
}

export default Bar;
