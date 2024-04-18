import { Transform } from 'stream'
import http from 'http'

class transformaDados extends Transform{
    _transform(chunk, enconding, callback) {
        const transforma = Number(chunk.toString()) * -1

        console.log(transforma)
        callback(null, Buffer.from(String(transforma)))
    }
}


const server = http.createServer((req, res) => {
    console.log('conectou')
    return req.pipe(new transformaDados()).pipe(res)
})

server.listen(3334)