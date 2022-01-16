//Clouser é o Escopo Criado Quando Uma Função é Declarada;
//Esse Escopo permite a Função acesar e manipular variaveis;

//contexto lexico em a Ação;
const x = 'global';

function fora(){
    const x = 'local'
    function dentro(){
        return x;
    }
    return dentro;
}
const minhafunc = new fora();//nunca se esqueca de instanciar para poder usar as funções internas da funcao principal que as guarda;
console.log(minhafunc())