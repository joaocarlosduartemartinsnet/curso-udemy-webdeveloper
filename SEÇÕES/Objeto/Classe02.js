class Avo {//toda classe tem 'constructor'
     constructor(sobrenome){
           this.sobrenome = sobrenome
     }
}

//para fazer o pai herdar os Atributos do avo usamos 'extends + nomedaclassequeseraherdada'
class Pai extends Avo{//a classe pai e extensao do avo
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)//aqui estamos usando 'super' no sobrenome para chamar o primeiro construtor de sobrenome no caso o sobrenome do Avo. 
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('silva', 'entregador de Movel')
    } 
}

//agora nos vamos instanciar a ultimaclasse no caso, da qui e a classe Filho
const filho = new Filho()

console.log(filho)


