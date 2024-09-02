import fastify from "fastify";
import {knex} from './database' 

const app = fastify()

app.get('/hello', async () => {
    const table = knex('sqlite_schema').select('*')

    return table
})

app.listen({ port: 4003 }).then(() => { console.log('server running') })