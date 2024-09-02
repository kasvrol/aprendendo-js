## Anotações

Necessário configurar script e instalar tsx para rodar node com typescipt

```bash
  "scripts": {
    "dev": "tsx watch src/index.ts"
  },
  "dependencies": {
    "fastify": "^4.27.0",
    "typescript": "^5.4.5"
  },
  "devDependencies": {
    "tsx": "^4.11.0"
```

comando para criar migrations
```bash
  npx knex migrate:make create-documents --knexfile knexfile.ts```
