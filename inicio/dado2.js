/*let identificador = "o valor que sera guardado";
console.log(identificador);*/

let preco = 19.90;
let valor_descont = 0.4;
let desconto = preco * (1 - valor_descont);

console.log(preco * (1-desconto) + '\ntendeu ');
console.log(desconto);

let nome = "caderno"; //String -> (texto) sequencia de simbolos.
let categoria = 'papelaria';

console.log("Produto: " + nome
+ "\nCategoria: " + categoria 
+ "\nPreço: " + preco
+ "\nDesconto: " + desconto);