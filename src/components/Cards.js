import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import hotelsData from "../data";
import Card from './Card';
import styled from "styled-components";
import moment from 'moment';

const CardsConteiner = styled.div`
	padding: 5rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	background-color: #EBECF0;
`

function Cards() {
	const [state] = useContext(StateContext);

	const dateFormat = 'YYYY-MM-DD';
	const stateDateIn = moment(state.dateIn).format(dateFormat);
	const stateDateOut = moment(state.dateOut).format(dateFormat);
	
	const filterDate = (hotel) => {
		const dateAvaiableFrom = moment(hotel.availabilityFrom).format(dateFormat);
		const dateAvailableTo = moment(hotel.availabilityTo).format(dateFormat);
	
		if (
			(stateDateIn >= dateAvaiableFrom &&
			stateDateOut <= dateAvailableTo)
		)
		return true;
	}

	const filterCountry = (hotel) => {
		if (
			state.country === 'cualquier pais' ||
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
			filterPrice(hotel) &&
			filterDate(hotel)
		);
	};

	const hotelsResult = hotelsData.filter(filterValidator);
	console.log(hotelsResult);
	
	return(
		<CardsConteiner>
			{/* {hotelsData.map((data) => {
				return (
					<Card {...data} />
				)
			})}; */}

			{hotelsResult.map((hotel) => (
				<Card {...hotel} key={hotel.slug} />
			))}
		</CardsConteiner>
	)
};

export default Cards;