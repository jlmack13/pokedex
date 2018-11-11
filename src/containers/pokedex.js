import React from 'react';
import styled from 'styled-components';
import Pokemon from '../components/pokemon';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 75%;
`

const pokemon = [
    {
        name: "Pikachu",
        description: "Mouse Pokémon",
        type: "Electric",
        imageURL: "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
        dexNumber: 25
    },
    {
        name: "Bulbasaur",
        description: "Seed Pokémon",
        type: "Grass",
        imageURL: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/120px-001Bulbasaur.png",
        dexNumber: 1
    },
    {
        name: "Squirtle",
        description: "Tiny Turtle Pokémon",
        type: "Water",
        imageURL: "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
        dexNumber: 7
    },
    {
        name: "Charmander",
        description: "Lizard Pokémon",
        type: "Fire",
        imageURL: "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
        dexNumber: 4
    }
]

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: pokemon
        }
    }

    
    render() {
        return(
            <Wrapper>
                <p>This is a pokedex. Here are some pokemon.</p>
                {this.state.pokemon.map( pokemon => 
                    <Pokemon 
                        name={pokemon.name} 
                        dexNumber={pokemon.dexNumber}
                        imageURL={pokemon.imageURL}
                        description={pokemon.description}
                        type={pokemon.imageURL}
                    /> 
                )}
            </Wrapper>
        );
    }
}

export default Pokedex;