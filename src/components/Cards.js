import React from 'react';
import hotelsData from "../data";
import Card from './Card';

function Cards() {
    return hotelsData.map((data) => (
		<Card {...data} />
	));
}

export default Cards;