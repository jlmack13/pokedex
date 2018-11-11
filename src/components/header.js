import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 3.5rem;
    font-family: 'PokemonGB';
    text-align: center;
    color: white;
    text-transform: uppercase;
    margin-top: 0;
    padding-top: 2rem;
`

const Hero = styled.header`
    background-color: red;
    width: 100%;
    height: 20vh;
    
`

const Header = () => {
    return (
        <Hero>
            <Title>Pokedex</Title>
        </Hero>
    );
};

export default Header;