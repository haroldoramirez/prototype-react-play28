import React, {Component} from 'react';
import './App.css';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    return (
      <div className="App">
        <Card titulo="#06 Condicional com If">
          <CondicionalComIf numero = {12}></CondicionalComIf>
        </Card>
        <Card titulo="#05 Condicional v1">
          <Condicional numero = {11}></Condicional>
        </Card>
        <Card titulo="#04 Repeticao">
        <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 Componente com filhos">
          <ComFilhos>
            <ul>
              <li>Ana</li>
              <li>Maria</li>
              <li>Jin</li>
              <li>Chester</li>
            </ul>
          </ComFilhos>
        </Card>
        <Card titulo="#02 Componente com parametro">
          <ComParametro titulo="Esse e um titulo" subtitulo="Esse e um subtitulo"></ComParametro>
        </Card>
        <Card titulo="#01 Primeiro componente">
          <Primeiro />
        </Card>
      </div>
    );
  }
}

export default App;
