const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c};
const obj2 = {a, b, c};
console.log(obj1, obj2);

//=============================================================================

//podemos montar um objeto desta forma tambem;
const nomeAttr = 'nota'
const valorAttr = 17.30
//nao se esqueça de usar os colxetes se nao o nome do atributo nao apareçe;
obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)