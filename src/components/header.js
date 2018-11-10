import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: palevioletred;
`

const Header = () => {
    return (
        <div>
            <Title>Pokedex</Title>
        </div>
    );
};

export default Header;