//Função em JS é FIRST-CLASS Object (Citizens);
//Higher-Order Function;

//=============================================================================

//criar de forma literal:
function teste1(){ };

//Armazenar em uma Variavel:
let teste2 = function(){ };

//Armazenar uma função dentro de um Arry:
let array = [function(a, b){ return a+b}, teste1(), teste2()];//pode ser por nome ou de forma direta.
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto:
let obj = {};
obj.falar = function(){ return 'Opa eae, Como Vai?'};
console.log(obj.falar());

//Uma função pode retornar/conter uma funçao
function soma(a, b){
    return function(c){
         console.log(`total = ${a+b+c}`);
    };
};
soma(2, 3)(4);

//===========================================================================

