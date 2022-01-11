var numero = 1;
{
    var numero = 2;
    console.log('Dentro = ' + numero);//sem template;
}
console.log(`Fora = ${numero}`);//com template;

//Este e um exemplo do porque devemos evitar usar VAR, para nao acabar criando variaveis Globais, e por concequencia causando diversos Bugs.