let soma = function(x, y) {
     return x + y;
}

let resultado = function(a, b, operacao = soma) {
         ola = a + b;
        console.log(ola + operacao(1, 5));
}
resultado(1, 5);