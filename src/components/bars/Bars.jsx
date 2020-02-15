import React, { useContext } from 'react';

import { StyledBars } from '../../styled/styled';
import { BarContext } from '../../context/BarContext';

import Bar from './bar/Bar';

function Bars(props) {
    const value = useContext(BarContext);

    return (
        <StyledBars>
            {props.barArray.map((number, index) => {
                if (index === value) {
                    return <Bar number={number} key={number} selected={true}/>;
                }
                return <Bar number={number} key={number} selected={false} />;
            })}
        </StyledBars>
    );
}

export default Bars;
