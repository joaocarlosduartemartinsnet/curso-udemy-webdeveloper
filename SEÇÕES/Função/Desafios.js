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
      if(lado1==0 && lado2==0 && lado3==0){
        console.log('Por Favor, coloque os valores');
      }
      else if(lado1==lado2 && lado2==lado3 && lado1==lado3){
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
trianguloclass();
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

//===============================================================================


/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

function MelhorePiorRecorde(recorde = [pontuações]){
    console.log('Melhores pontuações')
    for(i=0; i < recorde.length; i++){
       if(recorde[i] > 10){
           console.log([i - 3]+'.Pontuação: '+recorde[i]);
      }
    }
    console.log('Piores pontuações')
    for(i=0; i < recorde.length; i++){
        if(recorde[i] <= 10){
            console.log([i]+'.Pontuação: '+recorde[i]);
       }
     }
}
console.log('exer08')
MelhorePiorRecorde(pontuações = [10, 3, 4, 7, 30, 20, 80]);



//=============================================================================


/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/


function clasficaaluno(notas = [valores]){
    for(let i=0; i < notas.length; i++){
       if(notas[i] >= 50 || notas[i] >= 45){
          notas[i] = notas[i] + 5
       }    
       if(notas[i] <= 49){
         console.log("A Nota do Aluno com Arredondamento foi " + notas[i] + ' O Aluno foi Reprovado');
       }
       else if(notas[i] >= 50){
         console.log("A Nota do Aluno com Arredondamento foi " + notas[i] + ' O Aluno foi Aprovado');
      }
    }
}
console.log('exer09')
clasficaaluno(valores = [10, 40, 45, 47, 39, 38, 50, 80, 93])

//=============================================================================

/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/


function  verificarNumero(numeroo){
    numero = numeroo / 3;
    if(Number.isInteger(numero) == true){
        console.log('VERDADEIRO!!!!!!')
    }
    else{
        console.log('FALSO!!!!!!')
    }
}
console.log('exer10')
verificarNumero(9)


//=============================================================================


/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(num){
    let fat = 1
    for(i=1; i <= num; i++){
       fat = fat * i;
       console.log(fat)
    }
}
console.log('exer12')
fatorial(9)


//=============================================================================


/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
*///sinto muito nao entendi muito bem!

console.log('exer13')
op = 6
switch(op){
   case 1, 2, 3, 4, 5:
      console.log('dia util')
   break
   case 6, 7:
      console.log('dia nao util')
   break
   default:
      console.log('erro digite um novo valor plissssssssssssss')
   break
}

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