const nums = [2, 31, 12, 45, 89];

for(x in nums) {
    if(x == 2) {
        break;//o brak so joga pra fora
    }
    console.log(`x = ${nums[x]}`);
}

for(y in nums) {
    if(y == 2) {
        continue;//vai continuar do dois
    }
    console.log(`x = ${nums[x]}`);
}