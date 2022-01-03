let valor;//e uma undefined pois nao inicializamos nada nesta variavel.
console.log(valor);

valor = null;//null vazio, nulo, variavel sem valor, (NULL => Ausência de valor.)
console.log(valor);

//console.log(valor2); //vai dar erro pois esta varialvel n foi declarada e nem inicializada. vai dar como 'is not defined'.

const prod1 = {};
console.log(prod1.preco);//vai dar erro pois preco nao foi definido.
console.log(prod1);//vai estar vazio;

prod1.preco = 3.50;
console.log(prod1);

prod1.preco = undefined;//evite dar um valor undefined, deixe isto para o sistema.
console.log(prod1);
//delete produto.preco;

prod1.preco = null;//sem preço.
console.log(prod1);

