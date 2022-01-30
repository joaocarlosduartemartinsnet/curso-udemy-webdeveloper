//Object.preventExtensions //vai prevenir q seu objeto nao seja extendido, so excluir.
const produto = Object.preventExtensions({
       nome:'qualquer', preco: 1.33, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))//nao pode adicionar nada so deltar ou modificar, por isso o teste vai dar como false.

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//============================================================================

//Object.seal, nao conseguira excluir nem adicionar mas consegue modificar os atributos
const pessoa = {nome: 'Ana', idade: 34}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))//vai dar true pois esta selado pelo seal.

pessoa.nome = 'junior'
delete pessoa.nome
pessoa.idade = 23
console.log(pessoa)

//============================================================================

//Object.freeze, vai conjelar nao sera feito nem alterado nada apos o freeze
//selado + atributosconstantes.


//estes comandos sao formas de evitar modificaçoes q podem desorganizar o codigo ou ate pior.
