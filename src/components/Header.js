import React, { useContext } from 'react';
import { StateContext } from './StateContext';

function Header () {
    const [ state, setState ] = useContext(StateContext)

    return(
        <header>
            <h1>Hoteles</h1>
            <p>desde el <spam>{state.dateStart}</spam> hasta el <spam>{state.dateEnd}</spam></p>
        </header>
    )
}

export default Header;