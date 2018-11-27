import React from 'react';
import styled from 'styled-components';
import Pokemon from '../components/pokemon';
const Pokedex = require('pokeapi-js-wrapper');

//API: https://pokeapi.co/api/v2/pokemon/ 

const Wrapper = styled.div`
    margin: 0 auto;
    width: 75%;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    grid-template-rows: 300px 300px 300px;
    grid-gap: 20px;
`
const options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cache: true,
    timeout: 5 * 1000 // 5s
}

const P = new Pokedex.Pokedex(options);

class PokedexList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        P.getPokedexsList()
        .then((response) => {
            console.log(response);
        })
    }

    
    render() {
        return(
            <Wrapper>
                {this.state.pokemon.map( pokemon => 
                    <Pokemon 
              
                        name={pokemon.name} 
                        url={pokemon.url}
                    /> 
                )}
            </Wrapper>
        );
    }
}

export default PokedexList;