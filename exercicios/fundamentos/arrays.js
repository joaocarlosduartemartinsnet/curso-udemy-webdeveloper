/*Array ou Vetor = é uma estrutura que, ao contrário das variáveis, que suportam 
apenas um valor, o Array pode suportar vários valores, e de diferentes tipos,
que são identificados pelos Indices, que começam do 0(zero).*/

//por exemplo: 
let valores = ["ola", 12, 2+2, 2.4, "oi"];//as virgulas separam cada elemento, criando um novo Indice. Tome cuidado com o uso de vigulas amais dentro de um array.
console.log(valores[0].toUpperCase());//aqui ele esta chamndo o elemento 'ola' interno pelo seu indice que no caso e o zero.
console.log(valores[2]);


//OUTROS EXEMPLOS:
valores = [7.7, 8.9, 6.3, 9.2];
console.log(`${valores[0]} , ${valores[3]}`);//Com uso de template.
console.log(valores[0] + " , " + valores[3]);//Sem o uso de template.
console.log(valores[4]);//vai dar como valor indefinido pois, nao foi criado uma valor para o Quarto Indice.

//Tambem podemos atribuir novos valores ao nosso array, e podemos troca-los tambem:
valores[4] = 30;//Aqui eu atribui mais um valor ao array, criando outro indice, para guardar aquele valor.
console.log(valores);
console.log(valores.length);//length vai dizer a quantidade de elementos dentro de nosso Array.

valores.push({id: 3}, null, false, 'teste');//o 'push' ira criar novos elementos para o nosso array.
console.log(valores);


console.log(valores.pop());//Irá retirar o ultimo valor do Array, fazendo com que aquele valor nao pertença mais ao Array.
console.log(valores);

delete valores[0]; /*outra forma de tirarmos valores do array e usando o 'delete',
so que o delete nao mantem o valor intacto ele 'destroi/exclui' o valor.*/
console.log(valores);

delete valores.pop();//aqui ele ira deletar o ultimo valor do Array.
console.log(valores);

console.log(typeof valores); //no js o tipo do array e object.

