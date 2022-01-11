function hand([ min = 0, max = 1000 ] ){
    if(min > max) [min, max] = [max, min]//aqui caso minimo seja maior que max ira fazer uma conversao de min pra max e max pra min;
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(hand([50, 40]));
console.log(hand([900]));
console.log(hand([, 10]));
console.log(hand([]));
