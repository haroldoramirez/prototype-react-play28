//Nao foi necessario importar o react porque nao temos codigos em jsx
//Tambem nao e necessario criar um arquivo .jsx apenas um .js ja basta
export default function (props) {

  if (props.test) {

    return props.children;

  } else {

    return false;

  }

}
