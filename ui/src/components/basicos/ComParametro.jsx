import React from 'react';

//Arrow functions com parametros
//O parametro tambem e chamado em props
export default parametro =>
  <React.Fragment>
    <h3>{parametro.titulo}</h3>
    <p>{parametro.subtitulo} - {2 + 2}</p>
    <p>{Array(10).fill(0)}</p>
  </React.Fragment>
