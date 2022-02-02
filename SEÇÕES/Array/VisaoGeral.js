//dentro de um array podemos guardar diversos valores de diversos tipos
console.log(typeof Array, typeof new Array, typeof [])

//uma foma nao recomendada mas uma forma de criar array 
let aprovados = new Array('bia', 'joao', 'carlitos');
console.log(aprovados)

//forma mais recomendada no caso a literal.
aprovados = ['bia', 'joao', 'carlitos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'carlos' //aqui seria a forma literal de adicionar um novo elemento ao array.
aprovados.push('Bianca')//a funçao 'push' serve para adicionar um novo elemento ao array.
console.log(aprovados.length)

aprovados[9] = 'neto'
console.log(aprovados.length)
console.log(aprovados[7] || aprovados[8] === undefined)


console.log(aprovados)
aprovados.sort()//a funçao 'sort' serve para ordenar o array.
console.log(aprovados)

delete aprovados[1] //a funçao 'delete', serve para (excluir um elemento, ou todos os elementos de um array).
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'joao', 'carlitos']
//aprovados.splice(0, 2).
aprovados.splice(1, 2).// a funcao 'splice' seria para excluir e adicionar, o 1 parametro e para escolher o identificador de onde vai começar a excluir, e o 2 parametro e a quantidade de elementos que serão excluidos do array.

aprovados.splice(1, 2, 'elemento1', 'elemento2')//aqui alem de excluir tambem vai poder adicionar novos elementos, nos lugares daqueles que foram excluidos


aprovados.splice(1, 0, 'elemento1', 'elemento2')//aqui ele vai começar do identificador 1, nao vai realizar nenhuma exclusao, e vai adicionar os novos elementos apos o elemento do identificador 1.
console.log(aprovados)

/*
splice(
  1-(parametro e o identificador de onde vai começar.)

  2-(parametro e a quantidade de elementos que serao excluidos, apos o identificador do primeiro parametro ser escolhido.)

  3-(o resto seria mais para adicionar elementos.)
    )
*/