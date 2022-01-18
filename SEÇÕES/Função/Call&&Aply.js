function getpreco(imposto = 0, moeda = 'R$'){
     return `${moeda} ${this.preco * (1 - this.desc) * (1 + this.imposto)}`;
}

const produto = {
    nome: 'notebook',
    preco: 2000,
    desc: 0.15,
    getpreco
}
console.log(produto.getpreco());



const carro = {
    preco: 20, 
    desc: 0.1, 
    getpreco
};
console.log(carro.getpreco());

//outras formas de fazer:
console.log(getpreco.call(carro));
console.log(getpreco.apply(carro));