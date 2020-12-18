import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import styled from "styled-components";
import moment from 'moment';

const Nav = styled.nav`
    margin: 2rem 2rem 2rem 6rem;
    padding: 1.5rem 2rem;
    width: 36%;
    background-color: rgba(255,255,255, 0.5);
    text-align: center;
`;

const InputsContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    div{
        display: flex;
        width: 88%;
        justify-content: space-around;
    }
`;

const navElementsStyle = `
cursor: pointer;
border-radius: 4px;
background-color: rgba(255,255,255,0.5);
outline: none;
border: none;
font-weight: 600;
font-size: 17px;
`;

const Input = styled.input`
    ${navElementsStyle}
    padding: 8px;
`;

const Select = styled.select`
    padding: 10px 0 10px 8rem;
    width: 84%;
    ${navElementsStyle}
`;

const Button = styled.button`
    ${navElementsStyle}
    padding: 1rem;
    width: 11rem;
    font-size: 19px;
`;

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
            <InputsContainer>
                <div>
                    <Input
                    name="dateIn"
                    type="date"
                    onChange={handleInput}
                    value={
                        Object.keys(state.dateIn).length === 0
                            ? {}
                            : moment(state.dateIn).format('YYYY[-]MM[-]DD')
                    }
                    placeholder="check in"
                    />

                    <Input
                    name="dateOut"
                    type="date"
                    onChange={handleInput}
                    value={
                        Object.keys(state.dateOut).length === 0
                            ? {}
                            : moment(state.dateOut).format('YYYY[-]MM[-]DD')
                    }
                    min={moment(state.dateIn).format("YYYY[-]MM[-]DD")}
                    />
                </div>
                
                <Select name="country" onChange={handleInput} value={state.country}>
                    <option value="cualquier pais">Todos los países</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                    <option value="Uruguay">Uruguay</option>
                </Select>

                <Select name="price" onChange={handleInput} value={state.price}>
                    <option value="cualquier precio">Cualquier precio</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </Select>

                <Select name="size" onChange={handleInput} value={state.size}>
                    <option value="cualquier tamaño">Cualquier tamaño</option>
                    <option value="tamaño pequeño">Hotel pequeño</option>
                    <option value="tamaño mediano">Hotel mediano</option>
                    <option value="tamaño grande">Hotel grande</option>
                </Select>

            </InputsContainer>
            
            <Button onClick={handleReset}>Reset</Button>
        </Nav>
    )
};

export default Filters;