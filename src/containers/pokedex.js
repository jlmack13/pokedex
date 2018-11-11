import React from 'react';
import Pokemon from '../components/pokemon';

class Pokedex extends React.Component {
    render() {
        return(
            <div id="pokedex">
                <p>This is a pokedex. Here are some pokemon.</p>
                <Pokemon 
                    name="Pikachu" 
                    imageURL="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
                    type="electric"
                />
            </div>
        );
    }
}

export default Pokedex;