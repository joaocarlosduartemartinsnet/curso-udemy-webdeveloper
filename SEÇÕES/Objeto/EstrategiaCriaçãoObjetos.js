//ha 6 formas de criar um objeto

//usando notação literal 
const obj1 = {}
console.log(obj1)

//Objeto em JS
const obj2 = new Object;
console.log(obj2)

//Funções Construtoras
function Produto(nome, prec, desc){
    this.nome = nome
    this.precoComDesconto = () => {//ou function(){} 
        Valorcomdesconto = prec * (1 - desc)
        return Valorcomdesconto.toFixed(2)
    }
}

const p1 = new Produto('sapato', 20.20, 0.12);
const p2 = new Produto('caneta biki', 30.05, 0.15);

console.log(p1.precoComDesconto() + ' | ' + p2.precoComDesconto());

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}
const f1 = criarFuncionario('Jhon Sena', 8000, 4)
const f2 = criarFuncionario('Barbara Jhones', 7000, 1)
console.log(f1.getSalario() + ' ' + f2.getSalario())

//Object.create
const filha = Object.create(null);//nao se esquça de colocar null
filha.nome = 'Ana';
console.log(filha);


//Uma Função Famosa que Retorna Objeto...
const fronJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fronJSON.info);