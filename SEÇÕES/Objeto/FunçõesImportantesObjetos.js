//FUNÇÕES IMPORTANTES DO OBJETO QUE DEVEMOS SABER;
const Pessoa = {
    nome: 'ana',
    idade: 34,
    peso: 70
}
//funcoes importantes dos objetos
console.log(Object.keys(Pessoa))//vai pegar somente as chaves.
console.log(Object.values(Pessoa))//vai pegar os valores das chaves.
console.log(Object.entries(Pessoa))//vai criar arrays de dois elementos para cada conjunto de caves e valores, exemplo: ['chave', 'valor'];

Object.entries(Pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`)
})
//ou
Object.entries(Pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(Pessoa, 'DatadeNascimento', {
    enumerable: false, //enumeravel
    writable: false,
    value:'01/12/1997'
})
console.log(Pessoa.DatadeNascimento)

//Object Assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}//ele vai sobreescrever o valor de 'a' pois esta funçao sempre considera o ultimo valor.
const obj = Object.assign(dest, o1, o2)//vai concatenar todos os objetos
console.log(obj)