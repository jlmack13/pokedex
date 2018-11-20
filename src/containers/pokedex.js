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

const pokemon = [
    {
        name: "Pikachu",
        id: 1,
        description: "Mouse Pokémon",
        type: "electric",
        imageURL: "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
        dexNumber: 25
    },
    {
        name: "Bulbasaur",
        id: 2,
        description: "Seed Pokémon",
        type: "grass",
        imageURL: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/120px-001Bulbasaur.png",
        dexNumber: 1
    },
    {
        name: "Squirtle",
        id: 3, 
        description: "Tiny Turtle Pokémon",
        type: "water",
        imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        dexNumber: 7
    },
    {
        name: "Charmander",
        id: 4,
        description: "Lizard Pokémon",
        type: "fire",
        imageURL: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
        dexNumber: 4
    },
    {
        name: "Pikachu",
        id: 5,
        description: "Mouse Pokémon",
        type: "electric",
        imageURL: "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
        dexNumber: 25
    },
    {
        name: "Bulbasaur",
        id: 6,
        description: "Seed Pokémon",
        type: "grass",
        imageURL: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/120px-001Bulbasaur.png",
        dexNumber: 1
    },
    {
        name: "Squirtle",
        id: 7, 
        description: "Tiny Turtle Pokémon",
        type: "water",
        imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        dexNumber: 7
    },
    {
        name: "Charmander",
        id: 8,
        description: "Lizard Pokémon",
        type: "fire",
        imageURL: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
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
                {this.state.pokemon.map( pokemon => 
                    <Pokemon 
                        key={pokemon.id}
                        name={pokemon.name} 
                        dexNumber={pokemon.dexNumber}
                        imageURL={pokemon.imageURL}
                        description={pokemon.description}
                        type={pokemon.type}
                    /> 
                )}
            </Wrapper>
        );
    }
}

export default Pokedex;