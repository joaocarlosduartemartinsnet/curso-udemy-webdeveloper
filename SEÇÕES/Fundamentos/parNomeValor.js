// par Nome/Valor;

const saudacao = 'ola'; // cotexto lexico 1;

function exec(){
    const saudacao = "eae breoowowoo"; //contexto lexico 2;
    return saudacao;
}

//Objetos são grupos aninhados de Nome/Valor;
const cliente = {
    nome: 'pedro', 
    idade: 23,
    peso: 70.32,
    endereco: {
        logradouro: 'rua tri legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);