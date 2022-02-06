// 'Foreach', significa 'para cada faça'.

const aprovados = ['Lucas', 'Manuel', 'Rafael', 'Ana']

aprovados.forEach(function(nome, indice) {//neste caso passaremos sempre dois parametros, o 1-estara relacionado com o caso, e o 2-representara o indice.
       console.log(`${indice} ${nome} `)
})

// Lembre-se!!!, sempre dois parametros na funcao dentro do 'foreach',
// parametro 1 - tera o nomeDoque o elemento esta relacionado
// parametro 2 - estara representando o indice de cada um dos elementos.

// OU se voce quiser pode usar somente os elementos. ex:
aprovados.forEach(function(nome) {
    console.log(`${nome}`)
})


//treinando: (usando function Arrow)
/*
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = nome => {console.log(nome)}
aprovados.forEach(exibirAprovados)
*/

//se voce quiser ter acesso ao indice vai ter que usar os dois parametros se for so pelo elemento use somente um parametro, se quiser usar somente o indice, vai ter que usar os dois parametros.
