import React from 'react';
import styled from 'styled-components';
import Pokemon from '../components/pokemon';


//API: https://pokeapi.co/api/v2/pokemon/ 

const Wrapper = styled.div`
    margin: 0 auto;
    width: 75%;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    grid-template-rows: 300px 300px 300px;
    grid-gap: 20px;
`


class PokedexContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        const pokedex = [];
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(json => json.results)
        .then(function(pokemon) {
            pokemon.map(pokemon => (
                fetch(`${pokemon.url}`)
                .then( res => res.json())
                .then(pokemon => pokedex.push(pokemon))
            ))
        })
        .then(pokedex => this.setState({pokemon: pokedex}))
    }


    
    render() {
        return(
            <div>
                {this.state.pokemon.map( pokemon => 
                    <Pokemon 
                        key={pokemon.id}
                        name={pokemon.name} 
                        dexNumber={pokemon.id}
                        imageURL={pokemon.sprites[0]}
                        type={pokemon.types}
                    /> 
                )}
            </div>
        );
    }
}

export default PokedexContainer;