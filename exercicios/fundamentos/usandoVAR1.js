/*
A variavel VAR dentro de um bloco de codigo que
nao seja uma funçao, ela ficara visivel.
*/
{
    {
        {
            var sera = 'sera?';
            console.log(sera);
        }
    }
}
console.log(sera);


function teste(){
    var local = '123';
    console.log(local);
};
teste();

//console.log(local);
//Aqui acima mostra um exemplo  de que nao temos acesso da var fora de um bloco de função somente de dentro. Quando definimos um VAR dentro de uma função ela sera visivel somente dentro de uma função.

//Quando criamos uma variavel fora de uma função, esta Variavel e Global. Evitar criar variaveis Globais para nao dar erro no futuro, pois este variavel pode acabar sendo sobreescrita.

//Tem Dois Tipos de Escopos de VAR: -GLOBAL OU -FUNCTION.