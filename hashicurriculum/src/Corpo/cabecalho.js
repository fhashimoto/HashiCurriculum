import React, {Component} from 'react';

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

export default Cabecalho;