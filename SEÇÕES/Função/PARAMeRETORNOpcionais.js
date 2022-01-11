//parametro e o que usamos na funcao e nas condiçoes, que estao entre os parenteses

function area(largura = null, altura = null){
    let area = largura * altura;
    if(largura == null && altura == null){
        console.log('Por favor, Informar os parametros.')
    }
    else if(area > 20){
        console.log(`Valor acima do Permitido ${area}m²`);
    }
    else{
        console.log(`${area}m²`);
    }
}
area(12, 2);