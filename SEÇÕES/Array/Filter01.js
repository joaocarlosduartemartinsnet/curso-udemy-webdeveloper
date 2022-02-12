//Outra forma de percorremos um Array, so que com menores dados baseados nos criterios do nosso 'Filter', por exemplo: pege todos os valores acima de 

const produtos = [
    {nome: 'Notebook', preco: 2600, fragil: true},
    {nome: 'iPad Pro', preco: 4000, fragil: true},
    {nome: 'livro', preco: 20.25, fragil: false},
    {nome: 'mouse', preco: 94.99, fragil: false}
]

//o filter serve para filtrar, pegar so o que nos interesssa. atraves de codigos.
console.log(produtos.filter(function(p){//so um parametro, pois queremos somente ter acesso aos 'nomes'
      return p.preco > 2500 //aqui nos pegamos os proodutos acima dos 2500 reais
}))






//TREINO!!!
  //esta funcao retorna produtos frageis e acima de 2500 reais
let frageis = produtos.filter(p => p.fragil == true && p.preco > 2500)
  //esta funçao retorna somente os produtos nao frageis
let naoFrageis = produtos.filter(p => p.fragil == false)

//aqui ira retornar somente os produtos caros, vai dar o nome e valor e se e caro ou nao 
let prodCaro = produtos.filter((p) => {
    if(p.preco >= 100)
      console.log(p.nome + '  R$' + p.preco + ' produto caro ')
    
    if(p.preco < 100)
      console.log(p.nome + '  R$' + p.preco + ' produto barato ')
})

//==============================================================================

let caro = produtos.filter( produto => produto.preco > 500)
let fragil = produtos.filter( produto => produto.fragil == true)

console.log(produtos.filter(caro).filter(fragil))