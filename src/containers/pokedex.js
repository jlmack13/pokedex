import React from 'react';
import styled from 'styled-components';
import Pokemon from '../components/pokemon';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 75%;
`

class Pokedex extends React.Component {
    render() {
        return(
            <Wrapper>
                <p>This is a pokedex. Here are some pokemon.</p>
                <Pokemon 
                    name="Pikachu" 
                    imageURL="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
                    type="electric"
                />
            </Wrapper>
        );
    }
}

export default Pokedex;