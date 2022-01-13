let pessoa = {
    saudacao: 'bom dia',
    falar(){
       console.log(this.saudacao);
    }
};
pessoa.falar();
const falar = pessoa.falar
//falar();//se fizer desta maneira ira dar conflito, e para evitar isso usaremos o bind.

//Bind passa o objeto no qual voce quer que seja resolvido o 'this'.
const falardepessoa = pessoa.falar.bind(pessoa);//para que ele resolva presisamos colocar dentro dos parenteses de qual o Objeto que ele vai resolver.
falardepessoa();
