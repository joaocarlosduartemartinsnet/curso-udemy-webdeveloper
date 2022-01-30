console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    //o split vai quebrar cada uma das letras tornando cada uma em um array, so que invertido e usamos o join com as aspas para deixar tudo juntinho e certinho.
    return this.split('').reverse().join('')//aqui esta revertendo uma string ao contrario ex: escola -> (alocse), e o join vai deixar tudo juntinho, nao esqueça do traço no join()
}
console.log('Escola Cod3r'.reverse())

//=====================================================================

Array.prototype.first = function (){
    return this[0]//ira retormnar o primeiro atributo do array.
}
console.log([1, 2, 3, 4, 5, 6].first())
console.log(['a', 'b', 'c'].first())

//===================================================================
//tome cuidado com a herança pois pegara o ultimo valor, que e oq vai valer, ou seja o parametro q passarmos no reverse da primeira crianção, nao vai contar
String.prototype.tostring = function() {
    return 'lascou tudo'
}
console.log('eae amigo'.reverse())


//cuidado, nao se substitue funcoes q ja existem, globais no caso;