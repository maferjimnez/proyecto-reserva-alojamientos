import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import styled from "styled-components";

const Nav = styled.nav`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    z-index: 100000000;
    box-shadow: 0px 7px 6px 0px rgba(177,181,197,0.96);
`

function Filters(){

    const [state, setState] = useContext(StateContext);

    const handleInput = (e) => {
        const { name, value } = e.target;
        const values = { ...state, [name]: value };
        setState(values);
        console.log(state);
    };

    return(
        <Nav>
            <input name="dateIn"  type="date" onChange={handleInput}/>
            <input name="dateOut" type="date" onChange={handleInput}/>
            
            <select name="countries" onChange={handleInput}>
                <option value="0">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>

            <select name="price" onChange={handleInput}>
                <option value="0">Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>

            <select name="size" onChange={handleInput}>
                <option value="0">Cualquier tamaño</option>
                <option value="1">Hotel pequeño</option>
                <option value="2">Hotel mediano</option>
                <option value="3">Hotel grande</option>
            </select>
        </Nav>
    )
}

export default Filters