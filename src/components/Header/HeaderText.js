import React from 'react';
// libraries
import styled from "styled-components";
// components 
import DescriptionText from './FiltersDescription.js';



const HeaderTextContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function HeaderText () {
    return(
        <HeaderTextContainer>
            <div>
                <h1>Hoteles</h1>
                <p>Encuenta el lugar perfecto para tu estadía.</p>
            </div>
            <DescriptionText />
        </HeaderTextContainer>

    );
};

export default HeaderText;