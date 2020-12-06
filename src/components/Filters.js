import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import styled from "styled-components";
import moment from 'moment';

const Nav = styled.nav`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    z-index: 100000000;
    box-shadow: 0px 7px 6px 0px rgba(177,181,197,0.96);
`

function Filters(){

    const [state, setState] = useContext(StateContext);

    const handleInput = (event) => {
        let { name, value } = event.target;
        if ( name === 'dateIn' || name === 'dateOut'){
                value = moment(value);
        }
        const values = { ...state, [name]: value };
        setState(values);
    };

    const handleReset = (event) => {
        setState({
            dateIn: {},
            dateOut: {},
            country: "cualquier pais",
            price: "cualquier precio",
            size: "cualquier tamaño"
        }); 
     }

    return(
        <Nav>
            <input
            name="dateIn"
            type="date"
            onChange={handleInput}
            value={
                Object.keys(state.dateIn).length === 0
                    ? {}
                    : moment(state.dateIn).format('YYYY[-]MM[-]DD')
            }
            />

            <input
            name="dateOut"
            type="date"
            onChange={handleInput}
            value={
                Object.keys(state.dateOut).length === 0
                    ? {}
                    : moment(state.dateOut).format('YYYY[-]MM[-]DD')
            }
            // min={moment(state.dateIn).format("YYYY[-]MM[-]DD")}
            />
            
            <select name="country" onChange={handleInput}>
                <option value="cualquier pais">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>

            <select name="price" onChange={handleInput}>
                <option value="cualquier precio">Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>

            <select name="size" onChange={handleInput}>
                <option value="cualquier tamaño">Cualquier tamaño</option>
                <option value="tamaño pequeño">Hotel pequeño</option>
                <option value="tamaño mediano">Hotel mediano</option>
                <option value="tamaño grande">Hotel grande</option>
            </select>

            <button onClick={handleReset}>Reset</button>
        </Nav>
    )
}

export default Filters;