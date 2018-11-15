import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2.5rem;
    font-family: 'PokemonGB';
    text-align: center;
    color: white;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-top: 2rem;
    text-shadow: 2px 2px rgba(0, 0, 0, .6);
`

const Hero = styled.header`
    background-color: red;
    width: 100%;
    height: 20vh;
    display: grid;
    grid-template-columns: 2fr 6fr;
    
`

const Header = () => {
    return (
        <Hero>
            <Title>Pokedex</Title>
        </Hero>
    );
};

export default Header;