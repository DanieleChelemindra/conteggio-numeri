function ConteggioNumeroStr(){
    n2 = 1 * $("#contaFinale").val();
    i = 1 * $("#contaIniziale").val();
    testo = "";
    
    while(i != n2){
        
        testo = testo + " " + i.toString();
        i++

    }

    $("#conteggio").html(testo)
    

}