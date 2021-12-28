/*
vamos dizer que voce quer que uma variavel não mude
seu valor nunca, que seu valor seja constante, 
no javascript para criarmos uma variavel constante,
usamos "const" antes do nome de sua variavel.
EX:
*/
//este e um exemplo de uma variavel constante.
const a = 10;
/*
aqui, pode executar, e vera que o programa nao dara certo.
isso porque ja definimos um valor constante para a letra "a".
*/
a = a + 9 ;

console.log(a);