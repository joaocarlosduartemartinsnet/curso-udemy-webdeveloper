/*
switch(){
    case x...:
    default:
}
*/

/*let op = function(turno){
    switch(turno){
       case(1):
       console.log('BOM DIA');
       break;

       case(2):
       console.log('BOa tarde');
       break;

       case(3): case(4): 
       console.log('boa noite');
       break;

       default:
       console.log('valor nao existente, tente novamente');
       break;
    };
};
op(1);
op(2);
op(3);
op(4);
op(5);
op(121);*/

let imprimirresultado = function(nota) {
     switch(nota) {
         case 10: case 9: case 8: case 7:
            console.log('aprovado');
         break;

         case 6: case 5: case 4:
            console.log('recuperaçao');
         break;

         case 3: case 2: case 1:
            console.log('reprovado');
         break;

         default:
            console.log('error...valor inesistente.');
     }
}
imprimirresultado(3);
imprimirresultado(5);
imprimirresultado(7);
imprimirresultado(8);
imprimirresultado(9);
imprimirresultado(1);
imprimirresultado(100);