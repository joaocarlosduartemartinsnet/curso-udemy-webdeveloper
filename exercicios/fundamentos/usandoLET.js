let numero = 1;
{
    let numero = 2;
    console.log(`Dentro = ${numero}`);
    /*Independentemente do Bloco ser ou não ser Funcão, o LET  sera lido apenas dentro do Bloco.*/
}
console.log(`Fora = ${numero}`);

//LET dara preferencia a escopos menores,  no nosso exemplo de cima ele dara prefenrencia ao numero dentro do bloco.

//LET tem 3 Tipos de Escopos: -Global, -Função e -Bloco;