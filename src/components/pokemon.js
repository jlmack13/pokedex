import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    max-width: 15vw;
    background-color: lightgrey;
    border: 1px solid green;
    color: white;
    padding: 1.5rem;
`

const StyledImage = styled.img`
    max-width: 100px;
    margin: 0 auto;
`

const Name = styled.p`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
`

const Type = styled.p`
    font-size: 16px;
    color: black;
`

const Pokemon = ({imageURL, name, type}) => {
    return (
        <Card>
            <StyledImage src={imageURL} alt={name}/>
            <Name>{name}</Name>
            <Type>{type}</Type>
        </Card>
    );
}

export default Pokemon;