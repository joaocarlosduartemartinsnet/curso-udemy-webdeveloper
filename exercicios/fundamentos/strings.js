const escola = 'cod3r'; 
 
console.log(escola.charAt(4));//vai imprimir apenas o valor presente no quarto indice.

console.log(escola.charCodeAt(3));//Aqu ele nao vai pegar o caracter da variavel e sim o valor dele na tabela ask.

console.log(escola.indexOf('3'));//aqui ele vai ver se o valor listado esta presente em algum indice-(lembre-se que os indices começam a contagem do 0), se tive vai retornar o indice em que o caracter esta no momento, se nao tiver vai retornar -1.

console.log(escola.substring(1));//isto quer dizer q ele vai do indice 1, ate o ultimo indice.
console.log(escola.substring(0, 3));//isto quer dizer que vai começar no indice 0, e vai terminar no indice 3. aviso ele nao vai pegar o indice tres.

console.log('escola '.concat(escola).concat(' !'))//este comando ira fazer uma concatenaçao com o valor da variavel. e mais facil concatenar usando o sinal de   '+'.
console.log('escola ' + escola + ' !');

console.log(escola.replace(3, 'e')); //aqui neste comando ele ira fazer uma troca de valores no indece 3, no caso, aqui vai ser de 3 para e.

console.log('ana, joao, carlos, josé'.split(",")); //este comando ira criar um array, nao se esqueca de colocar um separador, no caso eu escolhi a virgula, o pradrao praticamente.