import React, { Component } from 'react';
import Header from './components/header';
import Pokedex from './containers/pokedex';
import Filters from './containers/filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filters />
        <Pokedex />
      </div>
    );
  }
}

export default App;
