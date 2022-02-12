//usaremos a funçao Reduce - os dois parametros sao 'acumular', e o 'atual'.

const Aluno = [
    {nome: 'julio', nota: 7.3, bolcista: false},
    {nome: 'Ana', nota: 8.0, bolcista: true},
    {nome: 'joao', nota: 7.8, bolcista: false},
    {nome: 'junior', nota: 6.8, bolcista: true}
]

//aqui iremos apenas realizar a extração das notas. e no reduce iremos somar as notas dos alunos.
//a funcao 'reduce' depende de outra callback anterior.
let result = Aluno.map(a => { return a.nota}).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(result.toFixed(0))
