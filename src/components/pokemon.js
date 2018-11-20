import React from 'react';
import styled from 'styled-components';
import Type from './type';

const Card = styled.div`
    background-color: #DEDEDE;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .3);
    color: white;
    padding: 1.5rem;
`

const StyledImage = styled.img`
    max-width: 80px;
    margin: 0 auto;
    display: flex;
`

const Name = styled.p`
    text-transform: uppercase;
    font-family: 'PokemonGB';
    color: black;
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
    text-shadow: 1px 1px rgba(0, 0, 0, .3);
`

const Number = styled.p`
    font-weight: bold;
    color: blue;
    font-size: 20px;
`
const PokemonHeader = styled.div`
    display: grid;
    grid-template-columns: 150px 50px;
`

const Pokemon = ({name, dexNumber, imageURL, description, type}) => {
    return (
        <Card>
            <PokemonHeader>
                <Name>{name}</Name>
                {/* convert the dex number to a string, and pad it with 0s until its 3 digits so it matches conventional formating of pokedex numbers*/}
                <Number>{dexNumber.toString().padStart(3, "0")}</Number>
            </PokemonHeader>
            <StyledImage src={imageURL} alt={name}/>
            <Type type={type} />
        </Card>
    );
}

export default Pokemon;