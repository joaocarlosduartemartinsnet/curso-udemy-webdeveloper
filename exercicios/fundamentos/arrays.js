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

//tambem podemos atribuir novos valores aos Indices:
valores[1] = 30;
console.log(valores[1]);
