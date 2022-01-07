//agora usaremos este metodo em um Array.

const [a] = [10];
console.log(a);


const [n1, n3, n4,  n5,  n6 = 0] = [10, 7, 8, 9];
console.log(n1, n3, n5, n4, n6);

//um array pode ter outros elementos do tipo array

const [, [,nota] ] = [ [2, 8, 8] , [9, 6, 3] ];
console.log(nota);
//o nota ta pegando o atributo '6' do segundo array, porque cada virgula usada e tipo pedir para ele pular.

//nos array vale mais apena acessar pelo indice do que pelo destruturing.