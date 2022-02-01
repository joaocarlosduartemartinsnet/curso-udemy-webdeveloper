class Lancamento {
    //esta classe ira se tornar numa funçao construtora
    constructor(nome = 'Generico', valor = 0){
          this.nome = nome
          this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
         this.mes = mes
         this.ano = ano
         this.Lancamento = []
    }

    addLancamentos(Lancamento){
        Lancamento.forEach(L => this.Lancamento.push(L))
    }

    sumario(){
        let ValorConsolidado = 0
        this.Lancamento.forEach(L => {
              ValorConsolidado += L.valor
        })
        return ValorConsolidado
    }
}

const salario = new Lancamento('Salario', 3000)//valor positivo q e o nosso salario.
const contaDeluz = new Lancamento('luz', -200)//esta e o resultado de uma conta entao vai ficar negativo.


const contas = new CicloFinanceiro(6, 2018)

contas.addLancamentos(salario, contaDeluz)
console.log(contas.sumario())
