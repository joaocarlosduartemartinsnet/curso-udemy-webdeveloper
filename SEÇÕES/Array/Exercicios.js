/*
1)Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.


let nome = 'Junior';

function cumprimentar(nome){
    console.log('Ola, '.concat(nome)+'!')
}

cumprimentar(nome)
*/

//=======================================================

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

//=====================================================

/*
3)Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.


function caucularSalario(horasTrabalhadas, recebeporHora){
  let salario = horasTrabalhadas * recebeporHora;
  return salario;
}
console.log(`Salário Igual a R$${caucularSalario(150, 40.5)}`)
*/

//============================================================

/*
4)Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

function mes(numero){
       switch(numero){
           case 1:
               console.log('Janeiro')
               break;
           case 2:
               console.log('Fevereiro')
               break;
           case 3: 
               console.log('Março')
               break;
           case 4: 
               console.log('Abril')
               break;
           case 5: 
               console.log('Maio')
               break;
           case 6: 
               console.log('Junho')
               break;
           case 7: 
               console.log('Julho')
               break;
           case 8: 
               console.log('Agosto')
               break;
           case 9: 
               console.log('Setembro')
               break;
           case 10: 
               console.log('Outubro')
               break;
           case 11: 
               console.log('Novembro')
               break;
           case 12: 
               console.log('Dezembro')
               break;
           default: 
              console.log('ERRRO porfavor digite um numero de 1 a 12');
              break;
       }
}
mes(13)
*/

//==========================================================

/*
5)Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function MaiorouIgual(n1, n2){
    if(n1 >= n2){
        console.log('VERDADEIRO!!!!')
    }else{
        console.log('FALSE!!!')
    }
}
MaiorouIgual(4, 4)
*/

//=========================================================

/*
6)Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
...".

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") 
         console.log(!valor)
    else if (tipo == "number") 
         console.log(-valor)
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}
console.log(inverso(false))
*/

//========================================================

/*
7)Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.

//SOLUÇÃO 01
function estaEntre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo) return numero >= minimo && numero <= maximo;
    return numero > minimo && numero < maximo;
}
console.log(estaEntre(90, 100, 160))

//SOLUÇÃO 02
function estaEntre(numero, minimo, maximo){
    if(numero >= minimo && numero <= maximo){
        console.log('true')
    }else{
        console.log('false')
    }
}
estaEntre(90, 100, 160)
*/

//=========================================================
