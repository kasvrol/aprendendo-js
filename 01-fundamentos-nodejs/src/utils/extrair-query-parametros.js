export default function extrairQueryParametros(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((queryParametros, param) => {
      const [key, value] = param.split("=");
      queryParametros[key] = value;

      return queryParametros;
    }, {});
  //extrair primeiro caractere e separa a query com base nos marcadores &
}
