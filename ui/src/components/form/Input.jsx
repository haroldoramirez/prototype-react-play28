import React, {useState} from 'react'

export default (props) => {
    //Controlled Components
    //O useState vai te retornar um array com dois elementes, o valor e a funcao que altera o valor
    const [nome, setNome] = useState('PumB@');
    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
        </>
    );
};