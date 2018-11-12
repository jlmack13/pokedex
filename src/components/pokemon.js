import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #DEDEDE;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .3);
    color: white;
    padding: 1.5rem;
`

const StyledImage = styled.img`
    max-width: 60px;
    margin: 0 auto;
`

const Name = styled.p`
    text-transform: uppercase;
    font-family: 'PokemonGB';
    color: black;
    font-size: 14px;
    font-weight: bold;
`

const Type = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: white;
    background-color: ;
`



const Number = styled.p`
    font-weight: bold;
    color: blue;
    font-size: 14px;
`
const Description = styled.p`
    font-size: 12px;
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
            <Type type={type} />
        </Card>
    );
}

export default Pokemon;