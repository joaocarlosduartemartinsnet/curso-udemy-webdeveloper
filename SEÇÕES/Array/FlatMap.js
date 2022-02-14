const Escola = [{
    nome: 'Turma: M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Maria',
        nota: 7.6
    },{
        nome: 'ola',
        nota:  4
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
       nome: 'junior',
       nota: 8.1
    }, {
        nome: 'tailor',
        nota: 9.3
    }, {
        nome: 'Wessley',
        nota: 7.5
    }]
}]

const getNotaDoAluno = (alunos) => alunos.nota
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno)
const nota1 = Escola.map(getNotasDaTurma)
console.log(nota1)


//=====================================================

//podemos jutar todas notas desta forma 
console.log([].concat( [ 8.1, 7.6, 4 ], [ 8.1, 9.3, 7.5 ]))

//ou

//desta forma retornaremos todas notas juntas:
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const nota2 = Escola.flatMap(getNotasDaTurma)
console.log(nota2)