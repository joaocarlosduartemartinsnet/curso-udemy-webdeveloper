//forma mais simples;
/*
let i = 0;//contador
while(i <= 10){//condiçao/relaçao
    console.log(`o numero: ${i}`);
    i++//incrementação
};
*/


function aleatoriovalor(min, max) {
    if(min > max) [min, max] = [max, min];
    let valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let op = 0;
while(op != -1){
    op = aleatoriovalor(-1, 10);
    console.log('opicao escolhida foi ' + op);
}

