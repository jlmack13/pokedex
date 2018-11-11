import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    max-width: 15vw;
    background-color: #DEDEDE;
    border: 1px solid green;
    color: white;
    padding: 1.5rem;
    margin: 2rem;
`

const StyledImage = styled.img`
    max-width: 100px;
    margin: 0 auto;
`

const Name = styled.p`
    text-transform: uppercase;
    font-family: 'PokemonGB';
    color: #346951;
    font-size: 20px;
    font-weight: bold;
`

const Type = styled.p`
    font-size: 16px;
    color: black;
`
const Number = styled.p`
    font-weight: bold;
    color: blue;
    font-size: 24px;
`
const Description = styled.p`
    font-size: 18px;
    color: purple;
`

const Pokemon = ({name, dexNumber, imageURL, description, type}) => {
    return (
        <Card>
            <Name>{name}</Name>
            <StyledImage src={imageURL} alt={name}/>
            {/* convert the dex number to a string, and pad it with 0s until its 3 digits so it matches conventional formating of pokedex numbers*/}
            <Number>{dexNumber.toString().padStart(3, "0")}</Number>
            <Description>{description}</Description>
            <Type>{type}</Type>
        </Card>
    );
}

export default Pokemon;