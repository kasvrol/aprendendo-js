process.stdin.pipe(process.stdout)
//stream com entrada e saída igual
process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    process.stdout.write('Saída: '+data+'\n')
})
//stream com a entrada normal e saída 'personalizada'
