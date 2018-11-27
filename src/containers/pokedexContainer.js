import React from 'react';
import Pokedex from '../components/pokedex';
const Dex = require('pokeapi-js-wrapper');

const options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cache: true,
    timeout: 5 * 1000 // 5s
}
const P = new Dex.Pokedex(options);


//API: https://pokeapi.co/api/v2/pokemon/ 


class PokedexContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        P.getPokemonsList()
        .then(res => this.setState({pokemon: res.results}))
    }


    
    render() {
        return(
            <Pokedex pokemon={this.state.pokemon}/>
        );
    }
}

export default PokedexContainer;