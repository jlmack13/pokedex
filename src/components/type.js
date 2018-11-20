import React from 'react';
import styled from 'styled-components';

const typeColors = {
    "water": "#3A9BFC",
    "grass": "#7ACA5C",
    "fire": "#FC462E",
    "electric": "#FECB45",
    "fairy": "#EC9BEC",
    "dragon": "#776BEB",
    "ghost": "#6768B8",
    "dark": "#765545",
    "psychic": "#FC5999",
    "fighting": "#B95647",
    "steel": "#AAAABA",
    "poison": "#A95798",
    "ice": "#6BCDFD",
    "bug": "#AAB933",
    "ground": "#DCBA5D",
    "rock": "#BAA96A",
    "flying": "#899BFC",
    "normal": "#AAAA9A",
};

const StyledIcon = styled.span`
    background-color: ${props => props.color};
    padding: .5rem 1rem;
    color: white;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    margin: 1.5rem;
    display: inline-block;
`

class Type extends React.Component {
    getTypeColor = (type) => {
        return typeColors[type];
    }

    render() {
        return(
            <StyledIcon color={this.getTypeColor(this.props.type)}>{this.props.type}</StyledIcon>    
        );
    }

}

export default Type;