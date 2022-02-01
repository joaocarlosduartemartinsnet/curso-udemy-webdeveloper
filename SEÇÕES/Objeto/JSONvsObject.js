//JSON nao possui funçao, porem e um formato mais simples e direto. 

const obj = {a:1, b:2, c:3, soma(){return a + b + c}}
console.log(JSON.stringify(obj));//vai converter par string em json, e a funcao foi excluida, porque o JSON e um formato de dados.(nao executavel)


//Agora nos faremos ao contrario, vamos pegar um JSON e transformar em um Objeto.
//console.log(JSON.parse("{a:1, b:2, c:3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))//forma correta
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "e": {}, "f": []}'))
//no JSON -> somente podemos delimitar em geral por Áspas Simples, e os atributos por  Áspas duplas e string tambem

