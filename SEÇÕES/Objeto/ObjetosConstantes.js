//pessoa -> 123 -> {...}
const pessoa = {nome: 'gerson'}
pessoa.nome = 'pedro'
cosole.log(pessoa)

//pessoa <- 23 -> {...}
//pessoa = {nome: 'Ana'}//nao funciona pois a constante definida no endereço '123' so valera para aquele endereço.

Object.freeze(pessoa)//vai congelar o objeto pessoa, ou seja o objeto so vai funcionar ate a linha 9, apartir do freese nao pode se alterar nenhum objeto ou adicionalos.

pessoa.nome = 'Ana';
pessoa.end = 'rua ola'
delete pessoa.nome
console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa)

//podemos usar desta forma Tambem
const pessoaConstante =  Object.freeze({nome: 'ana'})