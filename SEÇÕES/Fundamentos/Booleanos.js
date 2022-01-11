let isAtivo = false;
console.log(isAtivo);
isAtivo = true; 
console.log(isAtivo);
//valores padroes booleanos true e false;

isAtivo = 1;
//a logica da negaçao e "nao e passa a ser", ou seja se for verdadeiro, e nao falso, ele invertera de verdadeiro para falso.
console.log(!!isAtivo);//Duas negaçao, pela logica vai dar true;
console.log(!isAtivo);//Uma negaçao, pela logica vai dar false;

/*no exemplo em que usamos somente uma negaçao, ficou false, isto porque
a variavel "isAtivo" tem o valor booleano true, e de acordo com a logica da
negaçao o que "nao e passa aser", no nosso caso "nao e false mas passara a ser"
"RESUMO FAZ PRATICAMENTE UMA INVERÇAO DE VALORES BOOLEANOS, OQ E FALSO PASSA
A SER VERDADEIRO E O QUE E VERDADEIRO PASSA A SER FALSO".*/

console.log("Os Verdadeiros: ".toUpperCase());
console.log(!!3);
console.log(!!-1);
console.log(!!" ");//String vazia.
console.log(!!"Texto");
console.log(!![]);//Array vazio.
console.log(!!{});//Objeto vazio.
console.log(!!(isAtivo = true));
console.log(!!Infinity);

console.log(" ");

console.log("Os Falsos: ".toUpperCase());
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); 

console.log("pra finalizar...".toUpperCase());
console.log(!!('' || null || 0 || " "));//os simbolo significa ( "|| => OU" );

let nome = '';
console.log(nome || 'desconhecido'.toUpperCase());