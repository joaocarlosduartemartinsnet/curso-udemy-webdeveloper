const pilotos = ['Vettel','Allonso','Rainkonen','Silva','Massa']
pilotos.pop() //O Metodo 'pop' remove o ultimo elemento do array.
console.log(pilotos)

pilotos.push('Mutano')//O Metodo 'push' serve para adicionar um novo elemento ao nosso array.
console.log(pilotos)

pilotos.shift() //O Metodo 'shift' remove o elemento da primeira posiçao, obs(e basicamente o pop, mas ao contrario)
console.log(pilotos)

pilotos.unshift('Arilton Senna') //O Metodo 'unshift' adiciona um elemento na primeira posiçao do array
console.log(pilotos)



pilotos.splice(2, 0, 'texto2')
console.log(pilotos)
/*
'splice' (pode remover e adicionar elementos no array), tem 3 parametros no 'splice', 1 - Escolher a posiçao na qual vai começar.
          2 - Numero de elementos q serao excluidos apos a posiçao escolhida no primeiro parametro.
          3 - Adicionar adiciona novos elementos.
*/
pilotos.splice(2, 1, 'texto trocado', 'pernil')
console.log(pilotos)



/*
O metodo 'slice' serve para adicionar novos elementos dentro de um array, apartir de um indice e o indice final e ignorado. 
 *o primeiro parametro serve  para informar de qual indice ira ocorrer a captura dos elementos.
 *o segundo e ate onde vai, a captura dos elementos.
 *o metodo 'slice', captura os elementos de outro array.
*/
const algunspilotos1 = pilotos.slice(2) //aqui estou criando um novo array e pegando os elementos do array(piotos) apartir do indice 2
console.log(algunspilotos1)


const algunspiloto2 = pilotos.slice(1, 4) // vai pegar os elementos apartir do indice 1 e vai ignorar o elemento do indice 4.
console.log(algunspiloto2) 