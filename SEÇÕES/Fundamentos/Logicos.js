// v e v -> v;
// v e f -> f;
// f e v -> f;
// f e f -> f;

let f = 2;
let v = 2;
let c = 2;
if(v == 2 && f == 2 && c == 2){
    console.log("eae");
}else{
    console.log('fim');
};

//no 'ou' basta que uma condição seja verdadeira
// v ou v -> v;
// v ou f -> v;
// f ou f -> f;
// f ou v -> v;

let a = 3;
let b = 5;
if(a == 3 || b == 2){
    console.log('certo');
}

// no 'ou'-(xor) exclusivo os dois tem de ser direferentes;
// v xor v -> f;
// v xor f -> v;
// f xor v -> v;
// f xor f -> f;
//=====================================================================

function compra(trab1 = null, trab2 = 2){
    if(trab1 == null ){ 
      const comprartv = trab1 || trab2;
      console.log('eae como vai?');
    }else{
      const comprarsorvete = trab1 || trab2;
      console.log('kkkkkkkkkkk');
    }
}
compra();
compra(4);

//================================================

function comprar(trab1, trab2){ 
    const comprarsorvete = trab1 || trab2;
    console.log(`operaçao com 'OU', (${comprarsorvete})`);
    const comprartv = trab1 && trab2;
    console.log(`operaçao com 'E', (${comprartv})`);
    const comprarboneca = trab1 != trab2;
    console.log(`operaçao com 'DIFERENÇA', (${comprarboneca})`);
};
comprar(true, true);

//================================================================

function comprando(trab1, trab2){ 
    const comprarsorvete = trab1 || trab2;
    const comprartv = trab1 && trab2;
    const comprarboneca = trab1 != trab2;
    return {sorvete: comprarsorvete, tv: comprartv, boneca: comprarboneca};
};
console.log(comprando(true, true));
console.log(comprando(true, false));
console.log(comprando(false, false));