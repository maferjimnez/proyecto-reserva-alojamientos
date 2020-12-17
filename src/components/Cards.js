import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import hotelsData from "../data";
import Card from './Card';
import Error from './Error';
import styled from "styled-components";
import moment from 'moment';

const CardsConteiner = styled.main`
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
	const today = moment().format(dateFormat);
	
	const filterDate = (hotel) => {
		const dateAvaiableFrom = moment(hotel.availabilityFrom).format(dateFormat);
		const dateAvailableTo = moment(hotel.availabilityTo).format(dateFormat);
	
		if (
			Object.keys(state.dateIn).length === 0 ||
			Object.keys(state.dateOut).length === 0 ||
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
		){
			return true;
		} else {
			return false;
		}
		
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
	console.log(hotelsResult); // *! BORRAR ANTES DE ENTREGAR !* //
	
	if (hotelsResult.length === 0) {
		return(
			<CardsConteiner>
				<Error e="Parece que tu busqueda no tiene resultados" />
			</CardsConteiner>		
		);
	} else if (stateDateIn > stateDateOut) {
		return(
			<CardsConteiner>
				<Error e="Debes seleccionar una fecha de salida posterior a la de entrada"/>
			</CardsConteiner>
		);
	} else if (stateDateIn < today) {
		return(
			<CardsConteiner>
			<	Error e="La fecha de entrada debe ser igual o posterior al día de hoy"/>
			</CardsConteiner>
		);
	} else {
		return(		
			<CardsConteiner>
				{hotelsResult.map((hotel) => (
					<Card {...hotel} key={hotel.slug} />
				))}
			</CardsConteiner>
		);
	};
};

export default Cards;