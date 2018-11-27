import React from 'react';
import Pokemon from './pokemon';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 75%;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    grid-gap: 20px;
`

class Pokedex extends React.Component {
    render() {
        return(
            <Wrapper>
                {this.props.pokemon.map((pokemon, index) => 
                    <Pokemon 
                        key={index}
                        name={pokemon.name} 
                        url={pokemon.url}
                    /> 
                )}
            </Wrapper>
        );
    }
}

export default Pokedex;