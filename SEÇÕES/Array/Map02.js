const carrinho = [
    '{"nome": "Borracha", "preco": 4.45}',
    '{"nome": "Caderno", "preco": 14.45}',
    '{"nome": "Kit de lapis", "preco": 422.45}',
    '{"nome": "caneta", "preco": 40.45}'
]

//retornar array apenas com os preco

const paraObjeto = json => JSON.parse(json)//aqui seria para pegar os objetos
const PENASpreco = produto => produto.preco //aqui so vai pegar os 'preco' dentro dos objetos

const resultado = carrinho.map(paraObjeto).map(PENASpreco)

console.log(resultado)