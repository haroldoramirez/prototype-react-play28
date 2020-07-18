//Nao foi necessario importar o react porque nao temos codigos em jsx
export default function (props) {

  if (props.test) {

    return props.children;

  } else {

    return false;

  }

}
