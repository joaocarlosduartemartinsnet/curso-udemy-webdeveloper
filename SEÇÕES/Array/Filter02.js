//aqui veremos como um 'filter' funciona por dentro por isso vamos criar o nosso proprio 'filter';

Array.prototype.filter2 = function(callback){
     const meuArray = [];
     for(let i = 0; i < this.length; i++){
         if(callback(this[i], i, this)){
              meuArray.push(this[i]);
         }
     }
}

