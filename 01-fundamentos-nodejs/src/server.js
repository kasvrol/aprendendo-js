import http from "http";
import { bufferToJson } from "./middleware/bufferToJson.js";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await bufferToJson(req, res);

  if (method === "GET" && url === "/users") {
    return res.end(JSON.stringify(users));
  }
  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;
    users.push({
      id: 1,
      name,
      email,
    });
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
