const notas = [3, 3.5, 7.0, 8.9, 4.9, 9.3, 7]

//sem callback:
let notasBaixas1 = [];
for(let i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }
} 
console.log(`${notasBaixas1}`);


//com callback:
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7;
})
console.log(notasBaixas2)