import React from 'react';
import Date from './Date';
import Countries from './Countries';
import Prices from './Prices';
import Size from './Size';

function Filters(){
    return(
        <nav>
            <Date />
            <Date />
            <Countries />
            <Prices />
            <Size />
        </nav>
    )
}

export default Filters