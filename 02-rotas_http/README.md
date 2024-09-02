## Anotações

Necessário configurar script e instalar tsx para rodar node com typescipt

```json
{
  "dependencies": {
    "fastify": "^4.28.1",
    "knex": "^3.1.0",
    "sqlite3": "^5.1.7"
  },
  "scripts": {
    "start": "tsx watch src/server.ts",
    "knex": "node --loader tsx ./node_modules/.bin/knex"
  },
  "devDependencies": {
    "ts-node": "^10.9.2",
    "tsx": "^4.19.0",
    "typescript": "^5.5.4"
  }
}

```

- comando para criar migrations
```bash
  npx knex migrate:make <migration_name> --knexfile knexfile.ts
  ```


- comando para rodar a ultima migration
```bash
  npx knex --  migrate:latest
  ```

- ao rodar o sistema e acessar a porta da aplicação
```json
  [{"type":"table","name":"knex_migrations","tbl_name":"knex_migrations","rootpage":2,"sql":"CREATE TABLE `knex_migrations` (`id` integer not null primary key autoincrement, `name` varchar(255), `batch` integer, `migration_time` datetime)"},{"type":"table","name":"sqlite_sequence","tbl_name":"sqlite_sequence","rootpage":3,"sql":"CREATE TABLE sqlite_sequence(name,seq)"},{"type":"table","name":"knex_migrations_lock","tbl_name":"knex_migrations_lock","rootpage":4,"sql":"CREATE TABLE `knex_migrations_lock` (`index` integer not null primary key autoincrement, `is_locked` integer)"},{"type":"table","name":"transactions","tbl_name":"transactions","rootpage":5,"sql":"CREATE TABLE `transactions` (`id` char(36), `title` text not null, primary key (`id`))"},{"type":"index","name":"sqlite_autoindex_transactions_1","tbl_name":"transactions","rootpage":6,"sql":null}]
  ```

- para desfazer a migration criada localmente
```bash
  npx knex --  migrate:rollback
  ```