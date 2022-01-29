function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const Obj1 = new MeuObjeto
const Obj2 = new MeuObjeto
console.log(Obj1.__proto__ === Obj2.__proto__)
console.log(MeuObjeto.prototype === Obj1.__proto__) 

MeuObjeto.prototype.nome = 'Ana'
MeuObjeto.prototype.falar = function(){ 
    console.log(`Bom Dia, Meu Nome é ${this.nome}!`)
}
Obj1.falar()

Obj2.nome = 'Gabriel'
Obj2.falar()

const Obj3 = {}
Obj3.__proto__ = MeuObjeto.prototype//objeto tres vai herdar os atributos, funcoes e etc.., do 'MeuObjeto'.
Obj3.nome = 'Junior'
Obj3.falar()

//Resumo desta Loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)