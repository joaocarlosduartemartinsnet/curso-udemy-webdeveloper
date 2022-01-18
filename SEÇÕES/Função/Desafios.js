//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
//RESPOSTA:
function valores(val1, val2){
    console.log(`Soma: ${val1 + val2}.\nMultiplicação: ${val1 * val2}.\nSubtração: ${val1 - val2}.\nDivisão: ${val1 / val2}.`)
}
console.log('exer01')
valores(2, 4)


//===============================================================================


/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
function trianguloclass(lado1 = 0, lado2 = 0, lado3 = 0){
      if(lado1==lado2 && lado2==lado3 && lado1==lado3){
         console.log('A Classe do Triângulo e EQUILÁTERO.');
      }
      else if(lado1==lado2 || lado2==lado3 || lado1==lado3){
          console.log('A Classe do Triângulo é ISÓCELES.');
      }
      else{
          console.log('A Classe do Triângulo é ESCALENO');
      }
}
console.log('exer02')
trianguloclass(2,2,2);
trianguloclass(2,1,2);
trianguloclass(1,4,7);


//===============================================================================


/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/
function exp(val1, exp){
    return resp = Math.pow(val1, exp);
}
console.log('exer03')
console.log(exp(2,4))


//=============================================================================





//=============================================================================


/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.]
*/
function ola(valores = []){
    for(i = 0; i < valores.length; i++){
        if(valores[i] >= 9 && valores[i] <= 10){
            console.log(`Notas: ${valores[i]} A`)
        }
        else if(valores[i] >= 7 && valores[i] < 9){
            console.log(`Notas: ${valores[i]} B`)
        }
        else if(valores[i] >= 5 && valores[i] < 7){
            console.log(`Notas: ${valores[i]} C`)
        }
        else if(valores[i] < 5){
            console.log(`Notas: ${valores[i]} D`)
        }
    }
}
ola([0.0, 4.9, 5.0, 6.9, 7.0, 8.9, 9, 10])