//usando uma funçao construtora para criar um objeto
function Aula(nome, videoID){
     this.nome = nome;
     this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Ate breve', 456)

console.log(aula1, aula2)

//simulando o new
function novo(f, ...params){
    const obj = {}//criando um objeto vazio.
    obj.__proto__ = f.prototype//dar a herança.
    f.apply(obj, params)//aplicando obj junto no 2 parametro um array da lista de objetos q voce queira aplicar
    return obj
}

const aula3  = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Ate Mais', 456)

console.log(aula3, aula4)