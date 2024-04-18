import { Readable, Writable, Transform } from 'stream'

class leituraDeDados extends Readable{
    index = 1;

    _read() {
        setTimeout(() => {
            
            const i = this.index++
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i)) //<-Buffer só aceita string
                this.push(buf)//<-dados devem ser mandados em buffer
            }
        }, 1000)
    }
}

class transformaDados extends Transform{
    _transform(chunk, enconding, callback) {//chunk-> dados a serem usados
        const transforma = Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transforma)))//parametros(erro se existir, dado transformado)
    }
}

class escritaDeDados extends Writable{
    _write(chunk, enconding, callback) {//chunk-> dados a serem usados
        console.log(Number(chunk.toString()))
        callback()//<-realiza a função
    }
}

new leituraDeDados().pipe(new transformaDados()).pipe(new escritaDeDados()) //<-encaminhar os dados criados na classe para a saída
//saída de dados por segundo