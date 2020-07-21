import React, {Component} from 'react';
import './App.css';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    return (
      <div className="App">
          <h1>Fundamentos React</h1>
          <div className="Cards">
            <Card titulo="#11 Mega Sena" color="#00B796">
              <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#10 Contador" color="#354458">
              <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 Input" color="#ADC4CC">
              <Input></Input>
            </Card>
            {/**Se chama indireta porque o filho nao tem a referencia do PAI mas o PAI tem a referencia para filho*/}
            {/**useState conseguimos criar um valor na aplicacao que podem ser modificado pois as outras sao readonly*/}
            <Card titulo="#08 Comunicacao Indireta" color="#000">
              <Super texto="Se chama indireta porque o FILHO nao tem a referencia do PAI mas o PAI tem a referencia do FILHO.">
              </Super>
            </Card>
            <Card titulo="#07 Comunicacao Direta" color="#E1D041">
              <Pai sobrenome="Ramirez" sobrenome2="Rial"></Pai>
            </Card>
            <Card titulo="#06 Condicional com If" color="#F38630">
              <CondicionalComIf numero = {12}></CondicionalComIf>
            </Card>
            <Card titulo="#05 Condicional v1" color="#E94C6F">
              <Condicional numero = {11}></Condicional>
            </Card>
            <Card titulo="#04 Repeticao" color="#DE4D4E">
            <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 Componente com filhos" color="#588C73">
              <ComFilhos>
                <ul>
                  <li>Diana</li>
                  <li>Gertis</li>
                  <li>Apepu</li>
                  <li>Spot Inutil</li>
                </ul>
              </ComFilhos>
            </Card>
            <Card titulo="#02 Componente com parametro" color="#008BBA">
              <ComParametro titulo="Esse e um titulo" subtitulo="Esse e um subtitulo"></ComParametro>
            </Card>
          </div>
          <Primeiro />
      </div>
    );
  }
}

export default App;
