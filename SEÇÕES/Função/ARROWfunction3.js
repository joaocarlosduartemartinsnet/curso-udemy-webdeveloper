let comparacomthis = function(param){
     console.log(this === param);
}

comparacomthis(global)

const obj = {}
comparacomthis = comparacomthis.bind(obj)
comparacomthis(global)
comparacomthis(obj)

let compracomArrow = param => console.log(this === param)
comparacomArrow(global);