import React, { Component } from 'react';
import './App.css';
import Cabecalho from './Corpo/cabecalho.js';

class App extends Component {
  render() {
    return (
      <div>
        <Cabecalho nome="Felipe Hashimoto" endereco="Rua Bela Cintra, 201 - São Paulo, SP"/>
      </div>
    );
  }
}

export default App;
