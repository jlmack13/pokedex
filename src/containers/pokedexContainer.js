import React from 'react';
import Pokedex from '../components/pokedex';


//API: https://pokeapi.co/api/v2/pokemon/ 


class PokedexContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(json => this.setState({pokemon: json.results}))
    }


    
    render() {
        return(
            <Pokedex pokemon={this.state.pokemon}/>
        );
    }
}

export default PokedexContainer;