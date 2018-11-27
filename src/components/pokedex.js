import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
    render() {
        return(
            <div>
                {this.props.pokemon.map((pokemon, index) => 
                    <Pokemon 
                        key={index}
                        name={pokemon.name} 
                        url={pokemon.url}
                    /> 
                )}
            </div>
        );
    }
}

export default Pokedex;