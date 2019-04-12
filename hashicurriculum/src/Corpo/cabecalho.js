import React, {Component} from 'react';

class Cabecalho extends Component {

    constructor(props){
      super(props);
    }
  
    render(){
      return(
        <div>
          <a className="nome">{this.props.nome}<br/></a>
          <a className="endereco">{this.props.endereco}</a>
          <a className=""></a>
        </div>
      )
    }
}

export default Cabecalho;