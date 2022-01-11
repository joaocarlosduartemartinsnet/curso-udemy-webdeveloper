/*
 Destructuring => É um operador de destruturaçao, (tira da estrutura alguma coisa);
*/

//novo recurso do ES2015;

let pessoa = {
    nome: 'Ana',
    idade: 22,
    endereco: {
        rua: "trilegal!!",
        estado: "RS",
        numero: 1223
    }
};
//pessoa.endereco.rua = 'ola'
//console.log(pessoa.endereco.rua)
//console.log(pessoa.nome);//sem destructuring 
//console.log(pessoa.idade, pessoa.nome);

//=============================================================================

//APARTIR DAQUI USAMOS O DESTRUCTING.
const {nome, idade} = pessoa; //aqui esta querendo dizer, tire de dentro do objeto 'pessoa', os atributos de 'nome' e 'idade';
console.log(nome, idade);
//esta e uma forma de, em uma unica linha, voce tirar varios atributos de dentro de um objeto, e atribui as suas respectivas variaveis.

const {nome: n, idade: i} = pessoa //extraia do objeto 'pessoa', nome e idade, e crie variaveis com o nome('n') e o nome('i');
console.log(n, i);

//ou seja o que fizemos aqui em cima foi trocar os nomes das variaveis;

const {endereco: {rua, estado, numero}} = pessoa
console.log(rua, estado, numero);

//!!!CUIDADO!!! PARA NAO ACESSAR ATRIBUTOS INEZISTENTES DENTRO DO OBJETO QUE VOCE QUEIRA ACESSAR!!!.