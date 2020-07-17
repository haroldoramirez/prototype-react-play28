import React, {Component} from 'react';
import './App.css';
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    return (
      <div className="App">
        <Card titulo="#5 Condicional v1">
          <Condicional numero = {11}></Condicional>
        </Card>
        <Card titulo="#4 Repeticao">
        <Repeticao></Repeticao>
        </Card>
        <Card titulo="#3 Componente com filhos">
          <ComFilhos>
            <ul>
              <li>Ana</li>
              <li>Maria</li>
              <li>Jin</li>
              <li>Chester</li>
            </ul>
          </ComFilhos>
        </Card>
        <Card titulo="#2 Componente com parametro">
          <ComParametro titulo="Esse e um titulo" subtitulo="Esse e um subtitulo"></ComParametro>
        </Card>
        <Card titulo="#1 Primeiro componente">
          <Primeiro />
        </Card>
      </div>
    );
  }
}

export default App;
