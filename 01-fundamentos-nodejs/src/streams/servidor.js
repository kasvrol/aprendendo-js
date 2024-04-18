import { Transform } from 'stream'
import http from 'http'

class transformaDados extends Transform{
    _transform(chunk, enconding, callback) {
        const transforma = Number(chunk.toString()) * -1

        console.log(transforma)
        callback(null, Buffer.from(String(transforma)))
    }
}


const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const todoConteudoStream = Buffer.concat(buffers).toString()
    console.log(todoConteudoStream)
    return res.end(todoConteudoStream)
})

server.listen(3334)