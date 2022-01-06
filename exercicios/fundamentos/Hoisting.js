//Hoisting => E o movimento padrão de mover a declaração para o topo.
console.log(`a = ${a}`);
var a = 2;
console.log(`a = ${a}`);


/*
No exemplo acima a linguagem fez praticamente isto
var a;
console.log(`a = ${a}`); //undefined - (valor da variavel nao foi iniciado).
var a = 2;
console.log(`a = ${a}`); // 2;
*/


/* se fosse con let ocorreria um erro. pois com uma variavel let o efeito de hoisting nao acontece entao geraria um erro.
se quiser testar;
1*console.log(`a = ${a}`);
2*let a = 2;
3*console.log(`a = ${a}`);*/


//ate dentro de function o efeito seria o mesmo, por EXEMPLO:
        function teste(){
            console.log(`a = ${a}`);
            var a = 2;
            console.log(`a = ${a}`);
        };