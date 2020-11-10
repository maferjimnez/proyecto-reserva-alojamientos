import React, { useContext } from 'react';
import hotelsData from "../data";
import Card from './Card';
import { StateContext } from './StateContext';


function Cards() {
    return hotelsData.map((data) => (
		<Card {...data} />
	));
}

export default Cards;