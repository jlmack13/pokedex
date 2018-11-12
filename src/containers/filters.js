import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 75%;
    height: 10vh;
    background-color: #EDEDED;
`
const Heading = styled.h3`
    padding-top: 1rem;
    color: #1F1F1F;
    text-align: center;
`

class Filters extends React.Component {
    render() {
        return(
            <FilterWrapper>
                <Heading>Some Filters Will Be Here</Heading>
            </FilterWrapper>
        );
    }
}

export default Filters;