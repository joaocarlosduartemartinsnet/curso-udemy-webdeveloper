//o template considera cada espaço e cada quebra de linha
let nome = " junior ";
const concatenacao = " Olá "+ nome + "!";//sem template

const template = `ola ${nome} como vai?`;//usando template

console.log(concatenacao);
console.log(template);

//expressões...
console.log(`1 + 1 = ${1 + 1}`);//operações e variaveis so sao executados entre as expressões.

const up = texto => texto.toUpperCase();// esta (setá) e uma função elow que realiza uma conversao no nosso caso estamos convertendo todo texto da variavel texto para maiusculo;

console.log(`ei... ${up('cuidado')}!`);//com template

console.log('ei... '+ up('cuidado') + '!');//sem  template