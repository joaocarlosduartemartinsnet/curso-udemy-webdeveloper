//cadeia de prototypo (prototype chain)
Object.prototype.attr0 = '0'//nao faça isso em casa, da mas nao e recomendavel.

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'} //para fazer uma herança usamos '__proto__: avo' para que busque valores no objeto do avo caso o filho nao encontre valor esperado no pai.
const filho = {__proto__: pai, attr3: 'C'}
//'__proto__: nome da classe ou objeto que vai ser herdado';

console.log(avo.attr0, avo.attr1)
console.log(pai.attr0, pai.attr1, pai.attr2)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
//nao conseguimos fazer com que o pai pegue o valor do folhi sendo que pai nao e uma extensao do filho, ja o filho e uma extensao do pai que e uma extansao do avo.

//=======================================================================


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual = this.velAtual + delta;
            
        }else{
            this.velAtual = this.velMax 
        }
    },
    estatu(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax:  324
}

const volvo = {
    modelo: 'V40',
    estatu(){
        return `${this.modelo}: ${super.estatu()}`;//usamos 'super' para puxar a funçao la de cima a funçao original.
    }
}

Object.setPrototypeOf(ferrari, carro)//estabelecendo uma relaçao entre ferrari e carro ou seja ferrari tem carro como seu prototipo. 
Object.setPrototypeOf(volvo, carro)//estabelecendo uma relaçao entre volvo e carro ou seja volvo tem carro como seu prototipo.

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.estatu())

ferrari.acelerarMais(300)
console.log(ferrari.estatu())