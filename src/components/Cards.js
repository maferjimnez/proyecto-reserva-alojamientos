import React, { useContext, useState, useEffect } from 'react';
import { StateContext } from './StateContext';
// components
import Card from './Card';
import Error from './Errors/Error';
import DateErrorModal from './Errors/ModalDateError';

//assets
import hotelsData from "../assets/script/data";
import resultError from './Errors/assets/images/no_result_search.png';

//libraries
import styled from "styled-components";
import moment from 'moment';

const CardsConteiner = styled.main`
	padding: 5rem;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	background-color: #EBECF0;
`

function Cards() {
	const [state, setState] = useContext(StateContext);
	const dateFormat = 'YYYY-MM-DD';
	const stateDateIn = moment(state.dateIn).format(dateFormat);
	const stateDateOut = moment(state.dateOut).format(dateFormat);
	const today = moment().format(dateFormat);
	const [open, setOpen] = useState(true);

	const handleCloseModal = () => {
		setOpen(false);
		setState({
            dateIn: {},
            dateOut: {},
            country: "cualquier pais",
            price: "cualquier precio",
            size: "cualquier tamaño"
        }); 
	};

	useEffect(() => {
		return () => {
			setOpen(true);
		};
	}, [state.dateIn]);
	
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
	};

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
	
	if (hotelsResult.length === 0) {
		return(
			<CardsConteiner>
				<Error i={resultError} t="No se han escontrado hoteles con las características seleccionadas"/>
			</CardsConteiner>		
		);
	} else if (stateDateIn > stateDateOut) {
		return(
			<CardsConteiner>
				<Error i={resultError} t="La fecha de salida debe ser posterior a la fecha de entrada"/>
			</CardsConteiner>
		);
	} else if (stateDateIn < today) {
		return(
			<CardsConteiner>
				<DateErrorModal handleClose={handleCloseModal} open={open}/>
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