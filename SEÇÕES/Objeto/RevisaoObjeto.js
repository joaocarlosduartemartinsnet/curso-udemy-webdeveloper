//coleçao dinamica de chave/valor
const Produto = new Object//uma das formas de criar um objeto;
Produto.nome = 'cadeira';
Produto['Marca do projeto'] = 'Generica';
Produto.preco = 220;
Produto['preço do produto'] = 230;

console.log(Produto);


//caso queira deletar um chave/valor do objeto e so usar o 'DELETE'
delete Produto.preco;
delete Produto['Marca do projeto'];

console.log(Produto);

//outra forma de criar um objeto
const carro = {
    //aqui alem de criarmos um objetos podemos concatena-los
    modelo: 'A4',
    valor: 40.000,
    proprietario: {
        nome: 'Paulo',
        idade: 34,
        endereco: {
            rua: 'panquecasphilips',
            numero: 1023
        }
    },
    //alem de poder criarmos objetos dentro de objetos tambem podemos criar um objeto que recebe um array de diversos outros objeto como pode ver logo abaixo.
    condutores: [{
        nome: 'paulo fi',
        idade: 44
    }, {
        nome: 'Anabeli',
        idade: 1000
    }, {
        nome: 'Ricardo',
        idade: 20
    }],
    //voce pode colocar funcoes dentro dos objetos
    calcularValorSeguro: function(){
        //...
    }
}
//podemos adicionar novas atribuições desta forma tambem, alem de deletar e ver.
carro.proprietario.endereco.numero = 1000
//podemos acessar pelos colchetes / mas nao e reconmendavel.
carro['proprietario']['endereco']['rua'] = 'Alvineos Esquilos'
console.log(carro)

//agora estamos deletando novamente.
delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);//nao vai dar problema vai dar como undefined, pois temos carro mas nao temos um condutores definido.
