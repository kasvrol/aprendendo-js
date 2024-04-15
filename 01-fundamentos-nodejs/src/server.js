import http from 'http'

const server = http.createServer((req, res) => {
    return res.end('tchau')
})

server.listen(3333)