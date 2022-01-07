function hand({ min = 0, max = 1000 }){ //aqui temos um parametros definidos, caso nao tenha valor para um dos dois.
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}


const obj = {max: 50, min: 40};
console.log(hand(obj));
console.log(hand({min: 400}));
console.log(hand({}));

