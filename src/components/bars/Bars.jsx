import React from 'react';
import { StyledBars } from '../../styled/styled';

import Bar from './bar/Bar';

function Bars(props) {
    return (
        <StyledBars>
            {props.barArray.map((i) => {
                return <Bar number={i} key={i} />;
            })}
        </StyledBars>
    );
}

export default Bars;
