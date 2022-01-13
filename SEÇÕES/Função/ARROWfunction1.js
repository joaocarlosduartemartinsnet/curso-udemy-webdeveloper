//arrow function e uma forma mais curta de criar uma funcao.

let dobro = function(a){//forma mais longa usando function
    return 2 * a;
}

dobro  = (a) => {//forma mais curta usando Arrow Function.
    return 2 * a;
}

dobro = (a) => 2 * a; //caso seja somente uma linha tambem podemos fazer desta forma.

console.log(dobro(2))

//outro exemplo

let ola = function(){//function
    console.log('bom dia');
}

ola = () => console.log('bom dia');//Arrow function

ola()



