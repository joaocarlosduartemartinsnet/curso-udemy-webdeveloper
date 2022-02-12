const Aluno = [
    {nome: 'julio', nota: 7.3, bolsista: false},
    {nome: 'Ana', nota: 8.0, bolsista: true},
    {nome: 'joao', nota: 7.8, bolsista: false},
    {nome: 'junior', nota: 6.8, bolsista: true}
]
//antes de usar o 'reduce' use o 'map', depois coloque o reduce.

//Desafio1: Todos os alunos sao bolsistas?
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
console.log(Aluno.map(a => a.bolsista).reduce(todosbolsistas))
//vai retornar false

//Desafio2: algum aluno e bolsista?
const AlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(Aluno.map(a => a.bolsista).reduce(AlgumBolsista))
//vai retornar true