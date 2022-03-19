function criarProduto(nomeProd, precoProd){
    return {
       nome: nomeProd,
       peço: precoProd.toFixed(2),
       desconto: '5%'
    }
}
console.log(criarProduto('Gelatina', 3.40));
console.log(criarProduto('Geladeira', 300.9000));