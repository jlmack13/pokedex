import React from 'react';
import styled from 'styled-components';
import Type from './type';

const options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cache: true,
    timeout: 5 * 1000 // 5s
}

const Card = styled.div`
    background-color: #DEDEDE;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .3);
    color: white;
    padding: 1.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
`

const StyledImage = styled.img`
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: flex;
`

const Name = styled.p`
    text-transform: uppercase;
    font-family: 'PokemonGB';
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-shadow: 1px 1px rgba(0, 0, 0, .3);
    text-align: center;
`

const Number = styled.p`
    font-weight: bold;
    color: #6e6e6e;
    font-size: 20px;
    text-align: right;
    padding-bottom: 1rem;
`
const PokemonHeader = styled.div`
    display: grid;
    grid-template-rows: 30px 50px;
`

class Pokemon extends React.Component {

    render() {
        return (
            <Name>{this.props.name}</Name> 
        );
    }
}

export default Pokemon;
