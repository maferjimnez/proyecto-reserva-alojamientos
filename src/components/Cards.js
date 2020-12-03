import React, { useContext } from 'react';
import hotelsData from "../data";
import Card from './Card';
import { StateContext } from './StateContext';
import styled from "styled-components";

const CardsConteiner = styled.div`
	padding: 5rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	background-color: #EBECF0;
`

function Cards() {
	const [state] = useContext(StateContext);

	// const filterDate = () => {
		
	// }

	const filterCountry = (hotel) => {
		if (
			state.country === 'cualquier país' ||
			state.country === hotel.country
			)
			return true;
	};

	const filterPrice = (hotel) => {
		if(
			state.price === 'cualquier precio' ||
			Number(state.price) === hotel.price
		)
		return true;
	};

	const filterSize = (hotel) => {
		if (
			state.size === 'cualquier tamaño' ||
			(state.size === 'tamaño pequeño' && hotel.rooms <= 10) ||
			(state.size === 'tamaño mediano' && hotel.rooms <= 20 && hotel.rooms >= 10) ||
			(state.size === 'tamaño grande' && hotel.rooms >= 20)
			)
			return true;
	};

	const filterValidator = (hotel) => {
		return(
			filterCountry(hotel) &&
			filterSize(hotel) &&
			filterPrice(hotel)
		);
	};

	const hotelsResult = hotelsData.filter(filterValidator);
	console.log(hotelsResult);
	
	return(
		<CardsConteiner>
			{hotelsData.map((data) => {
				return (
					<Card {...data} />
				)
			})};
		</CardsConteiner>
	)
};

export default Cards;