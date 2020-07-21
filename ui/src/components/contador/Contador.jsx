import './Contador.css'
import React, {Component} from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default class Contador extends Component {

    //O estado dos componentes nao podem ser alterados diretamente
    //O react trabalha com evuolcao do estado
    constructor(props) {

        super(props);
        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0
        }
    
    }

    //Arrow functions para trabalhar melhor com this
    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        )
    }

}