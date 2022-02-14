const alunos = [
    {nome: 'Ana', nota: 9.0},
    {nome: 'julio', nota: 8.0},
    {nome: 'Ronaldo', nota: 6.0}
];

// Impretativo:
let total = 0
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota;
}
console.log(total / alunos.length);

// Declarativo:
//aprimeira funçao pega as 'notas' e a segunda funcao fara a soma entre o 'total e o atual'.
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual

//a declaraçao map usa da 'primeira funcao(pega as notas)' e a cada nota pega, sera somado na segunda funçao soma
let total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)