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