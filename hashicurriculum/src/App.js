import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Cabecalho nome="Felipe Hashimoto"/>
      </div>
    );
  }
}

class Cabecalho extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1 className="nome">{this.props.nome}</h1>
      </div>
    )
  }
}

export default App;
