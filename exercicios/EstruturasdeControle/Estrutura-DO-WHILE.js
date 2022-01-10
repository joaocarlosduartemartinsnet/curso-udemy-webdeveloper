/*
let i = 0;
do{
    console.log(`o numero: ${i}`);
    i++//incrementação
}while(i <= 10)//condiçao/relaçao
*/

function aleatoriovalor(min, max) {
    if(min > max) [min, max] = [max, min];
    let valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let op = 0;

do{
    op = aleatoriovalor(-1, 10);
    console.log('opicao escolhida foi ' + op);
}while(op != -1)

