const sequencia = {
   _valor: 1,//convenção
   get valor(){ 
       return this._valor++
   },
   set valor(valor){ 
       if(valor > this._valor){
         this._valor = valor
       }
   }
}

console.log(sequencia.valor, sequencia.valor )//get e set
sequencia.valor = 200
console.log(sequencia.valor,  sequencia.valor)
//se tentarmos adicionar um valor menor que o anterior ele ira ignorar e so incrementar.
sequencia.valor = 100
console.log(sequencia.valor,  sequencia.valor)
