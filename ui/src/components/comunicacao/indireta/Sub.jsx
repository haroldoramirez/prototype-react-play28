import React from 'react'

export default props => {

    function acao() {
        props.onClickar(Math.random(), 'Gerado')
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );

};