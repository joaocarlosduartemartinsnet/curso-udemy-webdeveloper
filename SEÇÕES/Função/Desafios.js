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

/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
function restdiv(n1 = 1, n2 = 1){
    console.log(`O resto da divisão, entre ${n1} e ${n2} é igual a ${n1 % n2}`);
}
console.log('exer04')
restdiv(9,2)


//=============================================================================

/*
05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/
//consegui fazer a expressao porem nao alterar o ponto para virgula
function soma(n1, n2){
    console.log(`R$${(n1+n2).toFixed(2)}`)
}
console.log('exer05')
soma(0.1,0.2)


//=============================================================================

/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function  juroSimples(c=0, i=0, t=0){
    console.log(`juros simples: J: ${c*i*t}`);
}
function jurosComposto(c=0, i=0, t=0){
    console.log(`juros composto: M: ${c*(1+i)**t}`)
}
console.log('exer06')
juroSimples(200, 30, 4);
jurosComposto(400, 20, 3);


//=============================================================================


/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”
*/
function calcbaskara(a, b, c){
    delta = b**2 - 4*c*a;
    if(delta < 0){
        console.log('nao existe raiz');
    }else{
        baskara1 = (-b + delta) / 2*a;
        baskara2 = (-b - delta) / 2*a;
        console.log(`x¹ = ${baskara1} e x² = ${baskara2}`);
    }
}
console.log('exer07')
calcbaskara(100, 43, 1)





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
console.log('exer40')
ola([0.0, 4.9, 5.0, 6.9, 7.0, 8.9, 9, 10])