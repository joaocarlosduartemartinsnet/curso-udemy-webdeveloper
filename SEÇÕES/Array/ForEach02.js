Array.prototype.forEach2 = function(callback){
       for(let i = 0; i < this.lenght; i++){
              callback(this[i], i, this)
       }
}

const aprovados = ['Lucas', 'Manuel', 'Rafael', 'Ana']

aprovados.forEach2(function(nome, indice) {
       console.log(`${indice} ${nome} `)
})