//o for ao contrario do while e do DO WHILE, nos fazemos a incrementação e o valor do contador, mais a condição em uma linha.

/*
EXEMPLO MAIS SIMPLES DA ESTRUTURA (FOR):
for(contador = 1; contador <= 12; contador++) {
      console.log(`Contador = ${contador}`);
};
*/

let notas = [3.5, 7.8, 6.0, 9.8, 10];
for(let i = 0; i < notas.length; i++) {
   console.log(`Nota = ${notas[i]}`);//se voce so colocar 'notas' sozinho ele vai pegar todos os valores presentes no array, mas com o contador ele ira imprimir cada nota de forma individual, pois o contador ira pegar cada indice e expressar a nota.

   if(notas[i] >= 7) {
       console.log(`Aprovado`);
   }else{
       console.log(`Reprovado`);
   }
}