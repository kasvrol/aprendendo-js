import { Readable } from 'stream'

class leituraDeDados extends Readable{
    index = 1;

    _read() {
        setTimeout(() => {
            
            const i = this.index++
            if (i > 5) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new leituraDeDados(),
    duplex:'half' //<-para conectar no servidor 
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data)
})