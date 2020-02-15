import React from 'react';
// import { BarContext } from '../../../context/BarContext';

function Bar(props) {
    // const value = useContext(BarContext);

    function normalize(val, max, min) { 
        let a = 3;
        let b = 100;
        if(max - min === 0) return 1; 
        return min + (val - a) * (max - min) / (b - a); 
    }

    let style = {
        display: 'inline-block',
        backgroundColor: `${props.selected ? 'rgb(150, 220, 250)' : 'rgb(196, 133, 191)'}`,
        color: 'rrgb(212, 212, 212)',
        margin: '0 2px',
        width: '10px',
        height: `${normalize(props.number, 800, 50)}px`
      };

    return (
        <div style={style}></div>
    );
}

export default Bar;
