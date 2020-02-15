import React from 'react';
import { StyledLayout } from '../../styled/styled';

import Bars from '../bars/Bars';

function Layout(props) {
    return (
        <StyledLayout>
            <Bars size={props.arraySize} />
        </StyledLayout>
    );
}

export default Layout;
