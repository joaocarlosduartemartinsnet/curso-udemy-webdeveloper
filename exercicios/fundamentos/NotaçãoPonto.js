/*notacao ponto e aquilo q usamos para acessar outras bibliotecas e funcoes das biblioteca, no exemplo abaixo  usamos o '.' para acessar a função 'log'. */
console.log(typeof console);
console.log(Math.pow(2, 3));

const ola = {}
ola.nome = 'Carlitos';
ola.idade = 21;
console.log(ola);

let meuArray = [];
meuArray.push('ola', 23, 'holholholhol');
console.log(meuArray);

function Obj(nome){
    this.nome = nome; 
    this.exec = function(){
        console.log('Exec...');
    }
    this.troll = function(){
        console.log('bom dia....');
    }
};

const obj1 = new Obj('joao');
const obj2 = new Obj('carlitos');
const oi = new Obj('ola ae');

console.log(oi.nome);
oi.troll();
console.log(obj2.nome);
obj2.exec();

