import fs from "fs/promises";
const databasePath = new URL("../db.json", import.meta.url);
export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf-8")
      .then((dados) => {
        this.#database = JSON.parse(dados);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile("db.json", JSON.stringify(this.#database));
  }
  select(tabela) {
    const dados = this.#database[tabela] ?? [];
    return dados;
  }

  insert(tabela, dados) {
    if (Array.isArray(this.#database[tabela])) {
      this.#database[tabela].push(dados);
    } else {
      this.#database[tabela] = [dados];
    }

    this.#persist();

    return dados;
  }
}
