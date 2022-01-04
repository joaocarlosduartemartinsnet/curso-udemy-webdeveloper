/*Armazenando uma Função dentro de uma Variável.
Aqui e um dos casos onde criamos uma Função Anônima, pois sera chamada pelo nome da variavel por isso nossa função não necessita de nome.*/
const imprimirsoma = function(a = 0, b = 0){
       console.log(a+b);
}
imprimirsoma(2, 3);


//Armazenando uma (função arrow) dentro de uma variavel, e uma das Formas curtas de construir, pois a setinha ira substituir o nome 'function'.
const soma = (a = 0, b = 0) => {
    return a + b;
}
console.log(soma(5,5));


//Retorno Implicito. A forma mais curta.
const subtracao = (a, b) => a - b;
console.log(subtracao(4, 3));


const imprimir2 = a => console.log(a);//aqui neste exemplo de funcao arrow o nosso parametro e a letra 'a' e a nossa funçao e imprimila no terminal.
imprimir3('Legal!!!');

//ex, se pasarmos aquela funcao arrow de cima para function ficaria assim.
/*const imprimir2 = function(a){
    console.log(a);
};*/

