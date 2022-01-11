let notas = [20, 12, 10, 3.7, 4.8];
let i = 0;
for(i in notas){//para cada indice em notas faça.
     if(notas[i] >= 7){
        console.log(`A Nota = ${notas[i]}, O Aluno foi Aprovado`);
     }else{
         console.log(`A Nota = ${notas[i]}, O Aluno foi Reprovado`);
     };
};