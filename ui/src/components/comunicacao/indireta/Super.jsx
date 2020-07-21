import React, {useState} from 'react'
import Sub from './Sub'

export default (props) => {

    const [texto, setTexto] = useState('Valor')
    const [num, setNum] = useState(0);

    function quandoClickar(valorGerado, texto) {
        setNum(valorGerado);
        setTexto(texto);
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClickar={quandoClickar}></Sub>
            <p>{props.texto}</p>
        </div>
    );

};