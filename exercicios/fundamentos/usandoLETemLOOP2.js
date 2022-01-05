let funcs = [];
for (let i = 0; i <= 10; i++){
     funcs.push(function(){//o push e pra adicionar os elemento no array.
         console.log(i);
     });
};
funcs[2]();
funcs[8]();
//aqui o LET guardou cada valor de i, ao contrario de VAR que so imprimiu o ultimo valor sem guardar os valores antes.
//resumindo use LET, pois LET e o melhor e mais atualizado, e a variavel mais usada no mercado de trabalho, mande a VAR pro @#!@!#@.