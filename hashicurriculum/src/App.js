import React, { Component } from 'react';
import './App.css';
import Cabecalho from './Corpo/cabecalho.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Cabecalho nome="Felipe Hashimoto" endereco="Rua Bela Cintra, 201 - São Paulo, SP"/>
      </div>
    );
  }
}

export default App;
