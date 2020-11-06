import React from 'react';
import hotelssData from "../data";
import Card from './Card';

function Cards() {
    return hotelssData.map((hotelData) => (
		<Card {...hotelData} />
	));
}

export default Cards;