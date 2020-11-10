import React, { useContext } from 'react';
import Date from './Date';
import Countries from './Countries';
import Prices from './Prices';
import Size from './Size';
import { StateContext } from './StateContext';


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