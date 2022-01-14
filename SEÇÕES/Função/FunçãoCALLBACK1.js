//CallBack -> significa chamar de volta, é quando passamos uma função e aconteçe algum tipo de evento que a funçao e chamada de volta pra fazer algo.

const fabricantes = ['Mercedes', 'Audi', 'BMW']


function inprimirNome(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(inprimirNome);

//Outras formas de usar o 'forEach':
fabricantes.forEach(fabricantes => console.log(fabricantes));
fabricantes.forEach((nome) => console.log(`${nome}`));

/*
-Podiamos Fazer Desta Forma Tambem:
for(i = 0; i < fabricantes.length; i++){
    console.log(`${i + 1}. ${fabricantes[i]}`)
}
*/
