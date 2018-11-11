import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    max-width: 20vw;
    background-color: red;
    color: white;
    padding: 1.5rem;
`

const StyledImage = styled.img`
    max-width: 100px;
`

const Name = styled.p`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
`

const Pokemon = ({imageURL, name, type}) => {
    return (
        <Card>
            <StyledImage src={imageURL} alt={name}/>
            <Name>{name}</Name>
            <p>{type}</p>
        </Card>
    );
}

export default Pokemon;