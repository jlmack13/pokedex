import React from 'react';
import styled from 'styled-components';
import Pokedex from '../components/pokedex';


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
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(json => this.setState({pokemon: json.results}))
    }


    
    render() {
        return(
            <Wrapper>
                <Pokedex pokemon={this.state.pokemon}/>
            </Wrapper>
        );
    }
}

export default PokedexContainer;