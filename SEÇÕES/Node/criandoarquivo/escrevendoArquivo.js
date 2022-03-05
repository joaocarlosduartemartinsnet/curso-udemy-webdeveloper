const fs = require('fs');

const produto = {
    nome: 'celular',
    preco: 2300,
    desconto: 0.23
}

fs.writeFile(__dirname + '/Arquivogerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo');
})