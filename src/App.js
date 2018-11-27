import React, { Component } from 'react';
import Header from './components/header';
import PokedexContainer from './containers/pokedexContainer';
import Filters from './containers/filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filters />
        <PokedexContainer />
      </div>
    );
  }
}

export default App;
