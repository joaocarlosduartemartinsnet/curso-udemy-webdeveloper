function carro(velocidademaxima = 200, delta = 5){
    //atributo privados
    let velocidadeatual = 0;//privado, pois nao usamos o 'this'

    //metodo publico
    this.acelerar = function(){//o this torna publico este metodo.
        if(velocidadeatual + delta <= velocidademaxima){
            velocidadeatual += delta;
        }else{
            velocidadeatual = velocidademaxima;
        }
    }

    //metodo publico
    this.velocidadeatual = function(){//o this torna isso publico, 
        return velocidadeatual;
    }
}

const uno = new carro();//aqui estamos instanciando a funcao principal assim podemos ter acesso as funções publicas
uno.acelerar()//esta funçao so esta acessivel e publica graças ao 'this'
console.log(uno.velocidadeatual());

const ferrari = new carro(200, 400);
ferrari.acelerar()
console.log(ferrari.velocidadeatual()); 

const porche = new carro(200, 40);//intanciamos.
porche.acelerar();//apos intanciar chamamos a funcao pra fazer o calculo.
console.log(porche.velocidadeatual());//pedimos para imprimir o calculo retornado.
