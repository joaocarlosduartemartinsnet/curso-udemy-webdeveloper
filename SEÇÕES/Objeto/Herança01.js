//Herança e uma forma de evitar muitas linha de codigos alem do necessario e melhor definição do codigo.

const ferrari = {
   modelo: 'F40',
   velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)//duas underline antes e depois cria um object.
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
