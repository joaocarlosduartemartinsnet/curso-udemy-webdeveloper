//EXISTEM FUNÇÕES (COM RETORNO), E FUNÇÕES (SEM RETORNO):

//Função (SEM RETORNO):

//Dentro Dos Parenteses Passaremos os Parâmetros de Entrada de nossa Função.
//que neste caso e o A e B.
function imprimasoma(a, b){
     console.log(a + b);
};
imprimasoma(2, 3);//aqui estamos chamando nossa funçao e atribuindo os valores para os parametros da funcao.



//TREIANANDO:
function imprimadivisao(a, b){
    console.log(a / b);
};
imprimadivisao(5, 5);


function digaoi(nome){
    console.log('Olá, Como Você Vai? ' + nome);
};
let nome = 'joao carlos';
digaoi(nome);


function ola(){
    console.log('oi');
}
ola();


function digabenvindo(nome, idade, peso){
    console.log(`Seja Bem Vindo!!!, ${nome}`.toUpperCase());
    console.log(`voce tem ${idade} anos, e pesa ${peso} Kg`);
};
digabenvindo('joao', 17, 100.500.toFixed(2));

//==============================================================================



//Função (COM RETORNO):
//tambem podemos definir um valor padrao pra os parametros;
function soma(a, b = 0){
     return a + b;
};

//se não chamarmos esta funcao(com retorno), dentro de um 'console.log()', nao aparecera nada, pois a função esta retornando apenas o valor de 'a+b'.
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());//se nao passarmos nenhum valor, ele vai dar como 'NaN' => 'not a number'.

