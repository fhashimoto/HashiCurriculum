import React, {Component} from 'react';

class Cabecalho extends Component {
  
    render(){
      return(
        <div>
          <p className="nome">{this.props.nome}</p>
          <address className="endereco">{this.props.endereco}</address>
          <p className=""></p>
        </div>
      )
    }
}

export default Cabecalho;