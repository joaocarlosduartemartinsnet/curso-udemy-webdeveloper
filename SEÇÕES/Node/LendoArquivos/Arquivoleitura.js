const fs = require('fs')

const caminho = __dirname + '/LerArquivo.json'

//sincrono....
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

//assincrono....
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})


const config = require('./LerArquivo.json')
console.log(config.db)