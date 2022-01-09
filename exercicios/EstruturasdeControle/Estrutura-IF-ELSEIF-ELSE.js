let turno = function(hora){
    if(hora >= 7.00 && hora <= 12.30){
        console.log("Turno da manhã");
    }
    else if(hora >= 13.20  && hora <= 17.40){
        console.log("Turno da Tarde");
    }
    else{
        console.log("Turno da Noite");
    }
};
turno(8.20);
turno(15.59);
turno(19);