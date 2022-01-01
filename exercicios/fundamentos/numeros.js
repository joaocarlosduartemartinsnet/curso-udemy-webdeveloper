const peso1 = 1.1;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));//vai verificar se e um numero inteiro.
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1*peso1 + avaliacao2*peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));//aqui ele vai limitar para duas casas decimais apos o ponto.
console.log(media.toString());//vai realizar uma conversão de numero para string(texto), mas se voce passar o valor dois ele vai convrter para binário EX;
console.log(media.toString(2));