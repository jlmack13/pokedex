import React, { Component } from 'react';
import Header from './components/header';
import Pokedex from './containers/pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex />
      </div>
    );
  }
}

export default App;
