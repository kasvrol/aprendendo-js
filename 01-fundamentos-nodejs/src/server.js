import http from "http";
import { bufferToJson } from "./middleware/bufferToJson.js";
import { Database } from "./database.js";
import { randomUUID } from "crypto";

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await bufferToJson(req, res);

  if (method === "GET" && url === "/users") {
    return res.end(JSON.stringify(database.select("users")));
  }
  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    const user = {
      id: randomUUID(),
      name,
      email,
    };

    database.insert("users", user);
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
