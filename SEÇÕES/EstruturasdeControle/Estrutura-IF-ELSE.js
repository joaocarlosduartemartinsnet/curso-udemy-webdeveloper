//if/else => se, se não;
let provas = function(nota) {
    if(nota >=7 ){
       console.log(`o valor de sua nota foi ${nota}, Aprovado`);
    }else{
       console.log(`o valor de sua nota  foi ${nota}, Reprovado`);
    }
}
provas(3);
provas(4);
provas(7);
provas(8);