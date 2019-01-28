import React, { Component } from 'react';

import Site from './Site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <Site/>
        <Rodape/>
      </div>
    );
  }
}

export default App;
