let pesoT, E, M


pesoT = prompt("Quantos Kg de tomate você tem? ");
E = pesoT - 50 
M = E * 4
 if(pesoT > 50){
    
    alert("Você tem " + E + " Kg de tomates a mais\nE deverar pagar uma multa de R$" + M);
 } else{
    alert("Você tem " + pesoT + "Kg de tomate")
 }