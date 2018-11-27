import React, { Component } from 'react';
import Header from './components/header';
import PokedexList from './containers/pokedex';
import Filters from './containers/filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filters />
        <PokedexList />
      </div>
    );
  }
}

export default App;
