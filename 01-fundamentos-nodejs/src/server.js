import http from "http";
import { bufferToJson } from "./middleware/bufferToJson.js";
import { routes } from "./routes.js";
import extrairQueryParametros from "./utils/extrair-query-parametros.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await bufferToJson(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const parametroRota = req.url.match(route.path);
    const { query, ...params } = parametroRota.groups;

    req.params = params;
    req.query = query ? extrairQueryParametros(query) : {};

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333);
