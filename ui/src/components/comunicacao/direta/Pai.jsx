import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        {/**Pega todas as propriedados do pai e passa pro filho*/}
        <Filho {...props}><strong>Haroldo</strong></Filho>
        {/**Pega apenas uma propriedade do pai e passa pro filho*/}
        <Filho sobrenome={props.sobrenome2}>Bruna</Filho>
        <Filho sobrenome={props.sobrenome2}>Diana</Filho>
        <Filho sobrenome="Nobrega">Pedro</Filho>
    </div>