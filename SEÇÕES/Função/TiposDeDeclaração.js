console.log(soma(4,4))
//Função Declarativa - (Function Declaration):
function soma(x = 0, y = 0) {
    return x + y;
}
console.log(soma(400, 50));

//Função Expressiva - (Function Expression):
const mult = function(x, y){
    return x * y; 
}
console.log(mult(4, 5));

//Named Function Expression - (muito pouco usada)
const sub = function sub(x, y){
    return x - y;
}
console.log(sub(4, 5));

//funcoes dentro de variavei so sao possiveis de serem chamadas se estiverem apos a sua criaçao, ja a 'function declaration', podemos chama-la antes mesmo de sua execuçao