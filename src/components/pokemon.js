import React from 'react';
import styled from 'styled-components';
import Type from './type';

const Card = styled.div`
    background-color: #DEDEDE;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .3);
    color: white;
    padding: 1.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
`

const StyledImage = styled.img`
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: flex;
`

const Name = styled.p`
    text-transform: uppercase;
    font-family: 'PokemonGB';
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-shadow: 1px 1px rgba(0, 0, 0, .3);
    text-align: center;
`

const Number = styled.p`
    font-weight: bold;
    color: #6e6e6e;
    font-size: 20px;
    text-align: right;
    padding-bottom: 1rem;
`
const PokemonHeader = styled.div`
    display: grid;
    grid-template-rows: 30px 50px;
`

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mimkyu",
            id: 778,
            imageURL: "https://cdn.bulbagarden.net/upload/thumb/9/9b/778Mimikyu.png/250px-778Mimikyu.png",
            types: ["ghost", "fairy"]
        }
    }

    componentDidMount() {
        console.log(this.props.url)
    }

    render() {
        return (
            <Card>
                <PokemonHeader>
                    <Number>{this.state.id.toString().padStart(3, "0")}</Number>
                    <Name>{this.props.name}</Name>
                </PokemonHeader>
                <StyledImage src={this.state.imageURL} alt={this.props.name}/>
                <Type type={this.state.type} />
            </Card>
        );
    }
}

export default Pokemon;
