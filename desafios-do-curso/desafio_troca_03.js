//existem tres formas de criar uma variavel:
//cont = so se usa em valor que não serao trocados e que serão constantes.
//var = forma basica-(sem muita informação);
//let = a forma de variavel mais usada - (sem muita informação ainda do porque);

/*
troca de valores
a = 7;
b = 94;
Depois da Troca... a = 94 e b = 7;
*/
//==========================================================================

/*
//respondidio por mim.
let a = 7;
let b = 94;
let aux = 0;

let aux = a;
let a = b;
let b = aux;

console.log('A: '+a);
console.log('B: '+b);
*/

//resposta do sor.
let a = 7;
let b = 94;
let tempo = 0;

tempo = a;
a = b;
b = tempo;
//ou
//[a, b] = [b, a];

console.log("A: " + a);
console.log("B: " + b);
