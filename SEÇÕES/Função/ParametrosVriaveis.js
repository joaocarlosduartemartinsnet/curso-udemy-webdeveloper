function soma(){
    let soma = 0;
    for(i in arguments){//vai pegar todos os valores dentro do parametro e somar.
        soma += arguments[i]
    }
    return soma;
}
console.log(soma());
console.log(soma(2,4,100,300));
console.log(soma(2,34, 'fala ae kkkkkkkk'))