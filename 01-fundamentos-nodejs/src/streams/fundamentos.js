import { Readable } from 'stream'

class UmParaCemStream extends Readable{
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

new UmParaCemStream().pipe(process.stdout) //<-encaminhar os dados criados na classe para a saída
//saída de dados por segundo