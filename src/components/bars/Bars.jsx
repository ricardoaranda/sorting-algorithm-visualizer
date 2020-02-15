import React, { useState, useEffect } from 'react';
import { StyledBars } from '../../styled/styled';

import Bar from './bar/Bar';

function Bars(props) {
    const [barArray, setBarArray] = useState(() => {
        let array = [];

        for (let i = 0; i < props.size; i++) {
            array.push(<Bar number={i} key={i}/>);
        }

        return array;
    });
    useEffect(() => {
        setBarArray(() => {
            let array = [];

            for (let i = 0; i < props.size; i++) {
                array.push(<Bar number={i} key={i}/>);
            }

            return array;
        });
    }, [props.size]);

    const randomizeBars = () => {
        console.log("randomizeBars()");
    }

    return (
        <StyledBars>
            {barArray}
        </StyledBars>
    );
}

export default Bars;
