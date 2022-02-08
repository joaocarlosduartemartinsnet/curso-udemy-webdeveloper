const nums = [1, 2, 3, 4, 5]

//um Map seria um For com proposito de mapear com uma funcao de dobrar no final, ou seja o dobrar o que voce recebeu. EX:
let  resultado = nums.map(function(e){
      return e * 2 //aqui e a tranformaçao que faremos, dependendo da operaçao feita ou numeros colocados
})
console.log(resultado)







//criamos tres funcoes (usando function Arrow), para passar na map, mas poderiamos fazer de forma ditreta no map entre as parenteses.
const soma10 = e => {return e + 10}
const triplo = e => {return e * 3}
const paraDinheiro = e => {return `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`}

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)//aqui ocorrera tres tranformaçoes.
console.log(resultado)
