//USANDO CLASSE:
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`meu nome e ${this.nome}`);
    }
}
const p1 = new Pessoa('joao');
p1.falar();



//USANDO Factory
const pessoa = (nome) => {
     return{
         fala: () => console.log(`meu nome e ${nome}`)
     }
}
const p2 = pessoa('joao');
p2.fala();