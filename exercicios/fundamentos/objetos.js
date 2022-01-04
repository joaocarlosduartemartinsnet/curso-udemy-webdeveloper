//pra criar um objeto em js usamos as chaves '{}';

/*o Object em javascript, (É UMA 
COLEÇÃO DE CHAVES/IDENTIFICADORES E VALORES),
nos podemos passar 
chaves/identificadores que vao 
receber valores de quaisquer tipos.
*POR EXEMPLO: {nome: 'joao', idade: 23}, neste exemplo: 
'nome' e 'idade' são as chaves, e os 
seus valores sao: 'joao' e 23;*/

const cod1 = {}

cod1.nome = 'ola';//aqui eu crirei um identificador e um valor ao identificador que serao adicionados ao objeto. (chave => nome , e valor => 'ola')

cod1.verdade = true;//aqui eu criei im identificador e um valor ao identificador e tambem serao adicionados ao  nosso objeto
console.log(cod1)


//podemos tambem criar de forma direta, por exemplo:
let cod2 = {nome: 'ola', idade: 23, verdadeiro: true};
console.log(cod2);


let cod3 = {};
cod3.nome = "Celular Ultra Mega";
cod3.preço = 4998.90;
cod3['desconto legal'] = 0.40; //tambem podemos fazer desta forma. Mas evite atributos com espaços.
console.log(cod3);

let prod1 = {
    nome: 'camisa polo',
    preco: 79.90,
    tamanho: 'M',
      obj: {
        ola: "oi",
        ola2: "ola",
        ola3: "bom dia"
     }
};
//podemos tambem aninhar os objetos, lembre-se disto.

//lembre-se tambem que, OBJETO não e a mesma coisa que JSON, JSON e um formato textual.

//Exemplo de  JSON: {'nome': 'queijo', 'numero': '23'};

//Exemplo de OBJETO: {nome: 'joao', numero: 23};