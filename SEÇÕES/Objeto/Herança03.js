const pai = {nome: 'pedro', corDoCabelo: 'preto'}

const filha1 = Object.create(pai)//vai criar um objeto novo tendo como prototipo o objeto pai, e a filha1 vai receber as caracteristicas do pai.
filha1.nome = 'Ana'
console.log(filha1.corDoCabelo)//vai ser 'preto', pois e herdado do pai

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for(let key in filha2){
    filha2.hasOwnProperty(key)?//vai verificar se os atributos da filha2 e dela ou por herança do pai, se retornar false quer dizer q foi por herança se for true q dizer que o atributo e da filha2 
       console.log(key): console.log(`por herança: ${key}`)
}