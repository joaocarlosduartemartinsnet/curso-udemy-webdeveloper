const valor = 'global'

function minhafuncao(){
     console.log(valor);
}
minhafuncao()


function exec(){
    const valor = 'Local'
    minhafuncao()
}
exec()

