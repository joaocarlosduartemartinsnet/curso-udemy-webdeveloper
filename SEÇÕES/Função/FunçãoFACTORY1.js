//Function Factory - (Funçao Fabrica), esta função retorna objetos;

//Factory Simples
function criarPessoa(){
    return{
       nome: 'Ana',
       sobrenome: 'silva'        
    }
}
console.log(criarPessoa())

//Apenas Teste:
function criarProduto(nomeProd, precoProd){
    return {
       nome: nomeProd,
       peço: precoProd.toFixed(2) - ((5 * precoProd) / 100)     
    }
}
console.log(criarProduto('Miojo de Ouro', 100))