export default function buildRoutePath(path) {
  const rotaParametroRegex = /:([a-zA-Z]+)/g; //g=global

  const pathComParametro = path.replaceAll(
    rotaParametroRegex,
    "(?<$1>[a-z0-9-_]+)"
  ); //?<$1> para criar identificadores

  const pathRegex = new RegExp(`^${pathComParametro}(?<query>\\?(.*))?$`); //^ para indicar inicio do regex
  //. => pegar qualquer caracter; *=>inumeras vezes

  return pathRegex;
}
