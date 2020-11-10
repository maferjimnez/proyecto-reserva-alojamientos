import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const Provider = (props) => {
    const [ state, setState ] = useState({
        dateStart: "",
        dateEnd: "",
        price: "",
        size: "",
        countries: ""
    });

    return(
    <StateContext.Provider value={[ state, setState ]}>
        {props.children}
    </StateContext.Provider> )
};