/*
1)Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.


let nome = 'Junior';

function cumprimentar(nome){
    console.log('Ola, '.concat(nome)+'!')
}

cumprimentar(nome)
*/

/*
2)Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

//RESOLUÇAO 1
let idade = 44
totalIdade = 0
for(i = 1; i <= idade ; i++){
    totalIdade += 365
}
console.log(`sua idade e de ${idade} e a quantidade de dias vividos sao de ${totalIdade} ao todo`)


//RESOLUÇÃO 2
function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}
console.log(converterIdadeEmAnosParaDias(44))
*/